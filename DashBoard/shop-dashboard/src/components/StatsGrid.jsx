import React from "react";
import { IoBagHandle, IoPeopleSharp, IoPieChartSharp, IoCartSharp } from "react-icons/io5";

function StatsGrid(){
    return (
        <div className="flex gap-4 w-full">
           <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-500">
                <IoBagHandle className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-normal">Total Sales</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-medium">$3798.99</strong>
                    <span className="text-sm text-green-500 pl-2">+333</span>
                </div>
            </div>
           </BoxWrapper>
           <BoxWrapper>
           <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
                <IoPeopleSharp className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-normal">Total Customers</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-medium">2136</strong>
                    <span className="text-sm text-blue-500 pl-2">-20</span>
                </div>
            </div>
           </BoxWrapper>
           <BoxWrapper>
           <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                <IoPieChartSharp className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-normal">Total Expenses</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-medium">$3423</strong>
                    <span className="text-sm text-orange-500 pl-2">-303</span>
                </div>
            </div>
           </BoxWrapper>
           <BoxWrapper>
           <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
                <IoCartSharp className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-normal">Total Orders</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-medium">21432
</strong>
                    <span className="text-sm text-pink-500 pl-2">-33</span>
                </div>
            </div>
           </BoxWrapper>
        </div>
    )
}

export default StatsGrid;

function BoxWrapper({children}){

    return <div className="bg-white rounded-md p-4 flex-1 shadow-md flex items-center">{children}</div>
}