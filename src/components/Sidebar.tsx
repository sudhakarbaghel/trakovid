import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{ border: "2px solid black", height: "100%", fontWeight: "600" }}
    >
      <div
        style={{
          borderBottom: "1.5px solid black",
          textAlign: "center",
          padding: "8px",
        }}
      >
        <Link to="/">
          <span style={{ color: "blue", textDecoration: "underline" }}>
            Contact
          </span>
        </Link>
      </div>
      <div
        style={{
          borderBottom: "1.5px solid black",
          textAlign: "center",
          padding: "8px",
        }}
      >
        <Link to="/graph">
          {" "}
          <span style={{ color: "blue", textDecoration: "underline" }}>
            Charts and Maps
          </span>
        </Link>
      </div>
      <div style={{ padding: "8px" }}>
        <p style={{ textAlign: "center" }}>Sidebar</p>
      </div>
    </div>
  );
};

export default Sidebar;
