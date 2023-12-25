'use client'
import { Transition , Dialog } from '@headlessui/react';
import React, { useRef } from "react"
import { format } from 'date-fns';
import { IoClose } from 'react-icons/io5';

import {ReactNode} from "react"
import clsx from 'clsx';
import { useOnClickOutside } from '@/app/hooks/use-on-click-oustide';
interface DrawerProps {
  isOpen : boolean 
  onClose : ()=>void
  children: ReactNode
  left ?: boolean
};

function Drawer({children,isOpen,onClose,left}:DrawerProps) {
    const ref = useRef<HTMLDivElement|null>(null);
    useOnClickOutside(ref,()=>onClose);
    
    return (
        <>
            
            <Transition.Root show ={isOpen}as={React.Fragment}>
                <Dialog as="div"className="relative z-[100] " onClose={onClose}>
                    <Transition.Child 
                        as={React.Fragment} 
                        enter ="ease-out duration-500"
                        enterFrom = "opacity-0"
                        enterTo = "opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo ="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50"/> 

                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className={clsx(
                                "pointer-events-none fixed inset-y-0 flex max-w-full", 
                                left?'left-0 pr-10': 'right-0 pl-10'
                                )}
                            >
                                <Transition.Child
                                    as ={React.Fragment}
                                    enter="transform transition ease-in-out duration-500"
                                    enterFrom={left?"-translate-x-full":"translate-x-full"}
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500"
                                    leaveTo={left?"-translate-x-full":"translate-x-full"}
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col  bg-navy py-6 shadow-xl " ref={ref}>
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-end">
                                                    <div className="ml-3 h-7 flex items-center">
                                                        <button 
                                                            type="button" 
                                                            onClick={onClose}
                                                            className="
                                                                rounded-md bg-navy text-greenish-blue hover:text-whitish transition-all duration-200  
                                                                focus:outline-none focus:ring-0 focus:ring-dark-gray 
                                                                focus:ring-offset-0
                                                            "
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <IoClose size={24} /> 
                                                        </button>
                                                    </div>
                                                </div>
                                            </div> 
                                            {children}
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default Drawer;