import React,{ Fragment} from "react";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { Popover,Transition,Menu } from '@headlessui/react';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function Header(){

const navigate = useNavigate()

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
            <Popover.Button className={classNames(open && 'bg-gray-100',"p-1.5 rounded-lg inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100")}
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
{/*  */}
<Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className={classNames(open && 'bg-gray-100',"p-1.5 rounded-lg inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100")}
            >
                
                 <HiOutlineBell font-size={24}/>
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
                    <strong className="text-gray-700 font-medium">Notifications</strong>
                 <div className="mt-2 py-1 text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, laborum.
                 </div>
                  </div>
                 </Popover.Panel>
              </Transition>
            </>
            )}

</Popover>

    {/* <Menu as="div" className="relative inline-block text-left"> */}
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400"
        >
         <span className="sr-only">Open user menu</span>

<div 
  className="h-10 w-10 rounded-full bg-gray-500 bg-cover bg-no-repeat bg-center" 
  style={{backgroundImage: 'url("https://source.unsplash.com/80x80/?face")'}}
>



          <span className="sr-only">Huge Jackson</span>
         </div>
        </Menu.Button>
      </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            
              <Menu.Item>
{({ active }) => (
<div className={classNames(active && 'bg-gray-200',"text-gray-700 focus:bg-gray-300 cursor-pointer rounded-sm px-4 py-2")}
 onClick={() => navigate('/profile')}>Your Profile</div>
                )}
              </Menu.Item>

              <Menu.Item>
{({ active }) => (
<div className={classNames(active && 'bg-gray-200',"text-gray-700 focus:bg-gray-300 cursor-pointer rounded-sm px-4 py-2")}
 onClick={() => navigate('/settings')}>Settings</div>
                )}
              </Menu.Item>

              <Menu.Item>
{({ active }) => (
<div className={classNames(active && 'bg-gray-200',"text-gray-700 focus:bg-gray-300 cursor-pointer rounded-sm px-4 py-2")}
 onClick={() => navigate('/signout')}>Sign Out</div>
                )}
              </Menu.Item>

</Menu.Items>
</Transition>
      </Menu>
           
            
        </div>

        </div>

    )
}