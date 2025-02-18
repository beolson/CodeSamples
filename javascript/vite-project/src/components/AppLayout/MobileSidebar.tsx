import * as Headless from '@headlessui/react';
import React, { useState } from 'react';
import { CloseMenuIcon } from '../icons';

interface MobileSidebarProps {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}

const ph = () => {
  return <div>phclose</div>;
};

const MobileSidebar = ({ open, close, children }: MobileSidebarProps) => {
  return (
    <Headless.Dialog open={open} onClose={close} className="lg:hidden">
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <Headless.DialogPanel
        transition
        className="fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out data-closed:-translate-x-full">
        <div className="flex h-full flex-col rounded-lg bg-white ring-1 shadow-xs ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
          <div className="-mb-3 px-4 pt-3">
            {/* <Headless.CloseButton as={NavbarItem} aria-label="Close navigation">
              <CloseMenuIcon />
            </Headless.CloseButton> */}
            <Headless.CloseButton as={ph} aria-label="Close navigation">
              <CloseMenuIcon />
            </Headless.CloseButton>
          </div>
          {children}
        </div>
      </Headless.DialogPanel>
    </Headless.Dialog>
  );
};

export default MobileSidebar;
