import React from "react";
// import { Link } from "react-router-dom";
import StatsGrid from "./StatsGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfile from "./BuyerProfile";
import Orders from "./RecentOrders";
import PopularProducts from "./PopularProducts";




export default function () {
    return (
        <div className="flex flex-col gap-4">
          <StatsGrid />
         
          <div className="flex flex-row gap-4 w-full">
          <TransactionChart />
          <BuyerProfile />
          </div>
         
              <div className="flex flex-row gap-4 w-full">
                <Orders />
                <PopularProducts />
              </div>

        </div>
    )
}

