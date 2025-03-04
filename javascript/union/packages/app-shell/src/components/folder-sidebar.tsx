import * as React from 'react';
import { ChevronRight, File, Folder } from 'lucide-react';
import folder from './folder-tree.json';
interface fsTree {
  directoryName: string;
  files: {
    fileName: string;
    displayName: string;
    tags: string[];
  }[];
  subDirectories: fsTree[];
}
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
// const data = {
//   changes: [
//     {
//       file: 'README.md',
//       state: 'M',
//     },
//     {
//       file: 'api/hello/route.ts',
//       state: 'U',
//     },
//     {
//       file: 'app/layout.tsx',
//       state: 'M',
//     },
//   ],
//   tree: [
//     [
//       'app',
//       [
//         'api',
//         ['hello', ['route.ts']],
//         'page.tsx',
//         'layout.tsx',
//         ['blog', ['page.tsx']],
//       ],
//     ],
//     [
//       'components',
//       ['ui', 'button.tsx', 'card.tsx'],
//       'header.tsx',
//       'footer.tsx',
//     ],
//     ['lib', ['util.ts']],
//     ['public', 'favicon.ico', 'vercel.svg'],
//     '.eslintrc.json',
//     '.gitignore',
//     'next.config.js',
//     'tailwind.config.js',
//     'package.json',
//     'README.md',
//   ],
// };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {folder.subDirectories.map((item, index) => (
                <Tree key={index} item={item as fsTree} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function Tree({ item }: { item: fsTree }) {
  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={
          item.directoryName === 'components' || item.directoryName === 'ui'
        }
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform" />
            <Folder />
            {item.directoryName}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.subDirectories.map((subItem, index) => (
              <Tree key={index} item={subItem} />
            ))}
            {item.files.map((subItem, index) => (
              <SidebarMenuButton
                key={index}
                isActive={subItem.fileName === 'button.tsx'}
                className="data-[active=true]:bg-transparent"
              >
                <File />
                {item.directoryName}
              </SidebarMenuButton>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
