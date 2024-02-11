import React from "react";
import { Link } from "react-router-dom";
import TransactionChart from "../TransactionChart";


export default function Transaction() {
  return (
    <div>
      <Link to="/" className="underline">
        Go to dashboard <br/>
      </Link>
      <div>
        <TransactionChart />
      </div>
    </div>
  );
}