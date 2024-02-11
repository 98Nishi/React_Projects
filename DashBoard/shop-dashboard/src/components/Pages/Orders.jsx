import React from "react";
import { Link } from "react-router-dom";
import RecentOrders from "../RecentOrders";


export default function Orders() {
  return (
    <div>
      <Link to="/" className="underline">
        Go to dashboard
      </Link>
      <br/><br/>
      <div>
        <RecentOrders />
      </div>
    </div>
  );
}