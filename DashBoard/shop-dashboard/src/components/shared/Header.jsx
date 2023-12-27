import React from "react";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { Popover } from '@headlessui/react'

export default function Header(){
    return (

        <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200 ">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-2" />


          <input type="text" placeholder="Search" className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-200 rounded-lg pl-11 px-4"/> 
        </div>
        <div className="flex items-center gap-6 mr-2">

        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className="p-1.5 rounded-lg inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-non active:bg-gray-100"
            >
                 <HiOutlineChatAlt font-size={24}/>
            </Popover.Button></>)}

</Popover>
           
            <HiOutlineBell font-size={24}/>
        </div>

        </div>

    )
}