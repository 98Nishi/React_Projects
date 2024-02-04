import React from "react";
import { IoBagHandle } from "react-icons/io5";

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
                    <strong className="text-xl text-gray-500 font-semibold">$3798.99</strong>
                    <span className="text-sm text-sky-500 pl-2">+333</span>
                </div>
            </div>
           </BoxWrapper>
           <BoxWrapper>
           <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
                <IoBagHandle className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-normal">Total Sales</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-500 font-semibold">$3798.99</strong>
                    <span className="text-sm text-sky-500 pl-2">+333</span>
                </div>
            </div>
           </BoxWrapper>
           <BoxWrapper>
           <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                <IoBagHandle className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-normal">Total Sales</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-500 font-semibold">$3798.99</strong>
                    <span className="text-sm text-sky-500 pl-2">+333</span>
                </div>
            </div>
           </BoxWrapper>
           <BoxWrapper>
           <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
                <IoBagHandle className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-normal">Total Sales</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-500 font-semibold">$3798.99</strong>
                    <span className="text-sm text-sky-500 pl-2">+333</span>
                </div>
            </div>
           </BoxWrapper>
        </div>
    )
}

export default StatsGrid;

function BoxWrapper({children}){

    return <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}