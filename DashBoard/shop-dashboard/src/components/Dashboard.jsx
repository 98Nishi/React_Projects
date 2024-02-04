import React from "react";
import { Link } from "react-router-dom";
import StatsGrid from "./StatsGrid";
import TransactionChart from "./TransactionChart";



export default function () {
    return (
        <div className="flex flex-col gap-4">


    <StatsGrid />
    <TransactionChart />
        </div>
    )
}

