import React, { useState } from 'react';
import MobileSidebar from './MobileSidebar';
import { OpenMenuIcon } from '../icons';

interface SidebarLayoutProps {
  navbar: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const SidebarLayout = ({ navbar, sidebar, children }: SidebarLayoutProps) => {
  let [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      {/* Sidebar on desktop */}
      <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">{sidebar}</div>

      {/* Sidebar on mobile */}
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebar>

      {/* Navbar on mobile */}
      <header className="flex items-center px-4 lg:hidden">
        <div className="py-2.5">
          {/* <NavbarItem onClick={() => setShowSidebar(true)} aria-label="Open navigation">
            <OpenMenuIcon />
          </NavbarItem> */}
          <div>
            <OpenMenuIcon />
          </div>
        </div>
        <div className="min-w-0 flex-1">{navbar}</div>
      </header>

      {/* Content */}
      <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64">
        <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:ring-1 lg:shadow-xs lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          <div className="mx-auto max-w-6xl">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;
