import React from "react";
import { Link } from "react-router-dom";
import BuyerProfile from "../BuyerProfile";


export default function Customers() {
  return (
    <div>
      <p>This is Customers Page</p>{" "}
      <Link to="/" className="underline">
        Go to dashboard
      </Link>
      <div>
        <BuyerProfile />
      </div>
    </div>
  );
}