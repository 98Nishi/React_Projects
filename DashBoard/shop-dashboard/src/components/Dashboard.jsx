import React from "react";
import { Link } from "react-router-dom";



export default function () {
    return (
        <div>
<p>  This is dashboard </p> <Link to="/products" className="underline" >Go to products</Link>
        </div>
    )
}

