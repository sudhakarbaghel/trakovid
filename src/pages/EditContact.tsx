import React from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Sidebar from "../components/Sidebar";

const EditContact: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1.8px solid #4492d5",
          outline: "1.8px solid #3a77aa",
          outlineOffset: "0px",
          width: "500px",
          borderRadius: "1px",
          height: "370px",
        }}
      >
        <div
          style={{
            border: "1.8px solid #3a77aa",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#2c5b7d",
              fontFamily: "none",
              padding: "5px 0px",
            }}
          >
            <span
              style={{
                // boxShadow: "0px 0px 5px #fff",
                textShadow: "2px 0px #2c5b7d, 0px 0px 30px #ffffff",
                fontSize: "22px",
                padding: "0px 20px 0px",
                fontWeight: "600",
                color: "white",
                // boxShadow: "0px 0px 3px 5px #f2e1f2"
              }}
            >
              Contact Page
            </span>
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            <div style={{ height: "100%", flex: "0.2" }}>
              <Sidebar />
            </div>
            <div style={{ backgroundColor: "#ece9e4", flex: 1 }}>
              {/* <ContactForm /> */}
              {/* <ContactList /> */}
              <ContactForm editMode contactId={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
