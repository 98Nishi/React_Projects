import React from "react";
import { Link } from "react-router-dom";


export default function Settings() {
  return (
    <div>
        <p>This is Settings Page</p>{" "}
      <Link to="/" className="underline">
        Go to dashboard
      </Link>
    </div>
  );
}