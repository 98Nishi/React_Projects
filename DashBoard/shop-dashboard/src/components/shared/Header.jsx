import React,{ Fragment} from "react";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { Popover, Transition } from '@headlessui/react'

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
            <Popover.Button className="p-1.5 rounded-lg inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-non active:bg-gray-100"
            >
                 <HiOutlineChatAlt font-size={24}/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">Messages</strong>
                 <div className="mt-2 py-1 text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, laborum.
                 </div>
                  </div>
                 </Popover.Panel>
              </Transition>
            </>
            )}

</Popover>
           
            <HiOutlineBell font-size={24}/>
        </div>

        </div>

    )
}