import React from "react";
import { Link } from "react-router-dom";
import PopularProducts from "../PopularProducts";


export default function Products() {
  return (
    <div>
      <Link to="/" className="underline">
        Go to dashboard
      </Link>
      <br/>
      <br/>
      <div>
        <PopularProducts />
      </div>
    </div>
  );
}
