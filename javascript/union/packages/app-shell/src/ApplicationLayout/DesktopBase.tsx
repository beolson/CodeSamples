import React, { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItems,
  TransitionChild,
} from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { SideBarPlaceholder } from './placeholders.jsx';

const Lines = (props: { count: number }) => {
  return (
    <>
      {[...Array(props.count)].map((_, i) => (
        <div className={` pl-1 text-base hover:text-neutral-400`}>
          Line s {i}
        </div>
      ))}
    </>
  );
};

export function ApplicationLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <div className=" flex w-72 flex-col">
          <SideBarPlaceholder />
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              head
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
