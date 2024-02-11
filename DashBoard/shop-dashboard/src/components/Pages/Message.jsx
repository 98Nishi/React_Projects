import React from "react";
import { Link } from "react-router-dom";


export default function Message() {
  return (
    <div>
      <Link to="/" className="underline">
        Go to dashboard
      </Link>
    </div>
  );
}