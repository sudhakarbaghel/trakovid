//
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addContact, editContact } from "../store/contactSlice";
import { RootState } from "../store/store";
import { Contact } from "../types";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface ContactFormProps {
  editMode?: boolean;
  contactId?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  editMode = false,
  contactId,
}) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contact.contacts);

  const initialContact: Contact = {
    id: "",
    firstName: "",
    lastName: "",
    status: "active",
  };

  const [contact, setContact] = useState<Contact>(initialContact);

  useEffect(() => {
    if (editMode && contactId) {
      const existingContact = contacts.find((c: Contact) => c.id === contactId);
      if (existingContact) {
        setContact(existingContact);
      }
    }
  }, [editMode, contactId, contacts]);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editMode && contactId) {
      dispatch(editContact({ ...contact, id: contactId }));
    } else {
      const newContact = { ...contact, id: uuidv4() };
      dispatch(addContact(newContact));
    }

    setContact(initialContact);
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        fontWeight: "600",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        {editMode ? "Edit Contact Screen" : "Create Contact Screen"}
      </div>
      <div
        style={{
          border: "2px solid black",
          padding: "10px",
          backgroundColor: "white",
          width: "max-content",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5px",
          }}
        >
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
            required
            style={{ width: "150px", border: "2px solid black" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
            required
            style={{ border: "2px solid black", width: "150px" }}
          />
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          <label htmlFor="">Status:</label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name="status"
                value="active"
                checked={contact.status === "active"}
                onChange={handleChange}
              />
              Active
            </label>
            <label style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={contact.status === "inactive"}
                onChange={handleChange}
              />
              Inactive
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        style={{
          border: "2px solid black",
          alignSelf: "center",
          padding: "5px 8px",
          backgroundColor: "#cccccc",
        }}
      >
        {editMode ? "Save Editted Contact" : "Save Contact"}
      </button>
    </form>
  );
};

export default ContactForm;
