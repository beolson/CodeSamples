import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { IfTrue } from '../utility/IfTrue.jsx';
const Lines = (props: { count: number }) => {
  return (
    <>
      {[...Array(props.count)].map((_, i) => (
        <div key={i} className={` pl-1 text-base hover:text-neutral-400`}>
          Line s {i}
        </div>
      ))}
    </>
  );
};

export const SideBarPlaceholder = () => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              <Lines count={100} />
            </ul>
          </li>
          <li>
            <div className="text-xs/6 font-semibold text-gray-400">
              Your teams
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              <Lines count={5} />
            </ul>
          </li>
          <li className="mt-auto">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export const TopNavPlaceholder = (props: {
  setSidebarOpenMobile: (state: boolean) => void;
  setSidebarOpenDesktop: (state: boolean) => void;
  sidebarOpenDesktop: boolean;
  sidebarOpenMobile: boolean;
}) => {
  return (
    <div className="sticky top-0 z-40 flex h-12 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => props.setSidebarOpenMobile(true)}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>

      <IfTrue expression={props.sidebarOpenDesktop}>
        <button
          type="button"
          onClick={() => props.setSidebarOpenDesktop(false)}
          className="hidden -m-2.5 p-2.5 text-gray-700 lg:block"
        >
          <span className="sr-only">Open sidebar</span>
          <ChevronDoubleLeftIcon aria-hidden="true" className="size-6" />
        </button>
      </IfTrue>
      <IfTrue expression={!props.sidebarOpenDesktop}>
        <button
          type="button"
          onClick={() => props.setSidebarOpenDesktop(true)}
          className="hidden -m-2.5 p-2.5 text-gray-700 lg:block"
        >
          <span className="sr-only">Open sidebar</span>
          <ChevronDoubleRightIcon aria-hidden="true" className="size-6" />
        </button>
      </IfTrue>

      {/* Separator */}
      <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form action="#" method="GET" className="grid flex-1 grid-cols-1">
          <input
            name="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6"
          />
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>

          {/* Separator */}
          <div
            aria-hidden="true"
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
          />

          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full bg-gray-50"
              />
              <span className="hidden lg:flex lg:items-center">
                <span
                  aria-hidden="true"
                  className="ml-4 text-sm/6 font-semibold text-gray-900"
                >
                  Tom Cook
                </span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="ml-2 size-5 text-gray-400"
                />
              </span>
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <Lines count={3} />
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};
