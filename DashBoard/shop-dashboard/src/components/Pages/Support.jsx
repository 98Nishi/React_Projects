import React from "react";
import { Link } from "react-router-dom";


export default function Support() {
  return (
    <div>
        <p>This is Support Page</p>{" "}
      <Link to="/" className="underline">
        Go to dashboard
      </Link>

    </div>
  );
}