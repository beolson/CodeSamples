import React, { useState } from 'react';
// import clsx from 'clsx';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { SideBarPlaceholder, TopNavPlaceholder } from './placeholders';


export function ApplicationLayout() {
  const [sidebarOpenDesktop, setSidebarOpenDesktop] = useState(false);
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(true);

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpenMobile}
          onClose={setSidebarOpenMobile}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpenMobile(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>

              <SideBarPlaceholder />
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div
          className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 
                      lg:flex-col transition-all  duration-500 
                      ${sidebarOpenDesktop ? 'lg:inset-x-0' : 'lg:-inset-x-72'} `}
        >
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <SideBarPlaceholder />
        </div>

        <div
          className={`transition-all  duration-500 ${sidebarOpenDesktop ? 'lg:pl-72' : 'lg:pl-0'} `}
        >
          <TopNavPlaceholder
            setSidebarOpenMobile={setSidebarOpenMobile}
            setSidebarOpenDesktop={setSidebarOpenDesktop}
            sidebarOpenDesktop={sidebarOpenDesktop}
            sidebarOpenMobile={sidebarOpenMobile}
          />

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              {sidebarOpenDesktop ? 'true' : 'false'}
              <input
                type="button"
                value="Toggle Sidebar"
                onClick={() => setSidebarOpenDesktop((cur) => !cur)}
              />
              {/* Your content */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
