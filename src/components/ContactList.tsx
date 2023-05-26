import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../store/contactSlice";
import { RootState } from "../store/store";
import { Contact } from "../types";
import { Link } from "react-router-dom";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div
      style={{
        fontWeight: "600",
        height: "320px",
        overflowY: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px 0 20px 0",
        }}
      >
        <Link to="/create">
          <button
            style={{
              border: "2px solid black",
              alignSelf: "center",
              cursor: "pointer",
              padding: "5px 8px",
              backgroundColor: "#cccccc",
            }}
          >
            Create Contact
          </button>
        </Link>
      </div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          padding: "0px 25px 25px",
        }}
      >
        {contacts.map((contact: Contact) => (
          <li
            key={contact.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                border: "2px solid black",
                backgroundColor: "white",
                minWidth: "140px",
                minHeight: "70px",
                padding: "15px",
              }}
            >
              <div>
                {contact.firstName} {contact.lastName}
              </div>
              <div>{contact.status}</div>
            </div>
            <Link to={`/edit/${contact.id}`}>
              <button
                style={{
                  border: "2px solid #a4a8a1",
                  borderRadius: "5px",
                  padding: "8px",
                  width: "90px",
                  // boxSizing: "border-box",
                  color: "white",
                  background: "linear-gradient(to top, #70a04e, transparent)",
                }}
              >
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(contact.id)}
              style={{
                border: "2px solid #a4a8a1",
                borderRadius: "5px",
                padding: "8px",
                width: "90px",
                // boxSizing: "border-box",
                color: "white",
                background: "linear-gradient(to top, #b64442, transparent)",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
