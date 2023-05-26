import React from "react";

type Props = {};

export default function EmptyList({}: Props) {
  return (
    <div
      style={{
        margin: "auto",
        border: "2px solid",
        width: "270px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
              padding: "8px",
        marginTop:'20px'
      }}
    >
      <div>
        <svg
          fill="#000000"
          width="50px"
          height="50px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          transform="matrix(1, 0, 0, -1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>cancel</title>{" "}
            <path d="M16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM21.961 12.209c0.244-0.244 0.244-0.641 0-0.885l-1.328-1.327c-0.244-0.244-0.641-0.244-0.885 0l-3.761 3.761-3.761-3.761c-0.244-0.244-0.641-0.244-0.885 0l-1.328 1.327c-0.244 0.244-0.244 0.641 0 0.885l3.762 3.762-3.762 3.76c-0.244 0.244-0.244 0.641 0 0.885l1.328 1.328c0.244 0.244 0.641 0.244 0.885 0l3.761-3.762 3.761 3.762c0.244 0.244 0.641 0.244 0.885 0l1.328-1.328c0.244-0.244 0.244-0.641 0-0.885l-3.762-3.76 3.762-3.762z"></path>{" "}
          </g>
        </svg>
      </div>

      <span>
        No Contact Found Please add contact from Create Contact Button
      </span>
    </div>
  );
}
