// src/utils.ts
var add = (a, b) => a + b;

// src/MyButton.tsx
import React, { useState } from "react";
var MyButton = (props) => {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      "data-testid": "count-button",
      className: "text-3xl font-bold underline",
      onClick: () => setCount((c) => c + 1)
    },
    "Count ",
    count,
    " ",
    props.label
  );
};

// src/sandbox/ExampleDialog.tsx
import React3, { useState as useState3 } from "react";
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

// src/hooks/useTailwindMediaQuery.ts
import { useState as useState2, useEffect } from "react";
var tailWindMediaQueries = {
  xxl: "(min-width: 1536px)",
  xl: "(min-width: 1280px)",
  lg: "(min-width: 1024px)",
  md: "(min-width: 768px)",
  sm: "(min-width: 640px)"
};
var matchTailwindSizes = () => {
  let sizes;
  for (sizes in tailWindMediaQueries) {
    if (window.matchMedia(tailWindMediaQueries[sizes]).matches) {
      return sizes;
    }
  }
  return "sm";
};
var useTailwindMediaQuery = () => {
  const [matches, setMatches] = useState2(matchTailwindSizes());
  useEffect(() => {
    const listener = () => {
      console.log("resized", matchTailwindSizes());
      setMatches(matchTailwindSizes());
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);
  return matches;
};

// src/utility/IfTrue.tsx
import React2 from "react";
var IfTrue = (props) => {
  const passes = typeof props.expression === "boolean" ? props.expression : props.expression();
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, passes && props.children);
};

// src/sandbox/ExampleDialog.tsx
var Lines = (props) => {
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, [...Array(props.count)].map((_, i) => /* @__PURE__ */ React3.createElement("div", { className: ` pl-1 text-base hover:text-neutral-400 text-green-500` }, "Linez ", i + 100)));
};
function ExampleDialog() {
  const [sidebarOpen, setSidebarOpen] = useState3(false);
  const screenSize = useTailwindMediaQuery();
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement(IfTrue, { expression: screenSize !== "lg" }, /* @__PURE__ */ React3.createElement(Dialog, { open: sidebarOpen, onClose: setSidebarOpen, className: "relative z-50 lg:hidden" }, /* @__PURE__ */ React3.createElement(
    DialogBackdrop,
    {
      transition: true,
      className: "fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
    }
  ), /* @__PURE__ */ React3.createElement("div", { className: "fixed inset-0 flex" }, /* @__PURE__ */ React3.createElement(
    DialogPanel,
    {
      transition: true,
      className: "relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
    },
    /* @__PURE__ */ React3.createElement(TransitionChild, null, /* @__PURE__ */ React3.createElement("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0" }, /* @__PURE__ */ React3.createElement("button", { type: "button", onClick: () => setSidebarOpen(false), className: "-m-2.5 p-2.5" }, /* @__PURE__ */ React3.createElement("span", { className: "sr-only" }, "Close sidebar"), /* @__PURE__ */ React3.createElement(XMarkIcon, { "aria-hidden": "true", className: "size-6 text-white" })))),
    /* @__PURE__ */ React3.createElement("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2" }, /* @__PURE__ */ React3.createElement("div", { className: "flex h-16 shrink-0 items-center" }, /* @__PURE__ */ React3.createElement(
      "img",
      {
        alt: "Your Company",
        src: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
        className: "h-8 w-auto"
      }
    )), /* @__PURE__ */ React3.createElement("nav", { className: "flex flex-1 flex-col overflow-y-auto" }, /* @__PURE__ */ React3.createElement(Lines, { count: 100 })), /* @__PURE__ */ React3.createElement("div", null, "Nav Foot"))
  )))), /* @__PURE__ */ React3.createElement("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, /* @__PURE__ */ React3.createElement("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6" }, /* @__PURE__ */ React3.createElement("div", { className: "flex h-16 shrink-0 items-center" }, /* @__PURE__ */ React3.createElement(
    "img",
    {
      alt: "Your Company",
      src: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
      className: "h-8 w-auto"
    }
  )), /* @__PURE__ */ React3.createElement("nav", { className: "flex flex-1 flex-col overflow-y-auto" }, /* @__PURE__ */ React3.createElement(Lines, { count: 100 })), /* @__PURE__ */ React3.createElement("div", null, "Nav Foot"))), /* @__PURE__ */ React3.createElement("div", { className: "sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden" }, /* @__PURE__ */ React3.createElement("button", { type: "button", onClick: () => setSidebarOpen(true), className: "-m-2.5 p-2.5 text-gray-700 lg:hidden" }, /* @__PURE__ */ React3.createElement("span", { className: "sr-only" }, "Open sidebar"), /* @__PURE__ */ React3.createElement(Bars3Icon, { "aria-hidden": "true", className: "size-6" })), /* @__PURE__ */ React3.createElement("div", { className: "flex-1 text-sm/6 font-semibold text-gray-900" }, "Dashboard"), /* @__PURE__ */ React3.createElement("a", { href: "#" }, /* @__PURE__ */ React3.createElement("span", { className: "sr-only" }, "Your profile"), /* @__PURE__ */ React3.createElement(
    "img",
    {
      alt: "",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      className: "size-8 rounded-full bg-gray-50"
    }
  ))), /* @__PURE__ */ React3.createElement("main", { className: "py-10 lg:pl-72" }, /* @__PURE__ */ React3.createElement("div", { className: "px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React3.createElement(Lines, { count: 100 })))));
}

// src/sandbox/ExampleDialogTwo.tsx
import React4, { useState as useState4 } from "react";
import {
  Dialog as Dialog2,
  DialogBackdrop as DialogBackdrop2,
  DialogPanel as DialogPanel2,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild as TransitionChild2
} from "@headlessui/react";
import {
  Bars3Icon as Bars3Icon2,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon as XMarkIcon2
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/20/solid";
var navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false }
];
var teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false }
];
var userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var Lines2 = (props) => {
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, [...Array(props.count)].map((_, i) => /* @__PURE__ */ React4.createElement("div", { className: ` pl-1 text-base hover:text-neutral-400` }, "Line s ", i)));
};
function ExampleDialogTwo() {
  const [sidebarOpen, setSidebarOpen] = useState4(false);
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement(
    Dialog2,
    {
      open: sidebarOpen,
      onClose: setSidebarOpen,
      className: "relative z-50 lg:hidden"
    },
    /* @__PURE__ */ React4.createElement(
      DialogBackdrop2,
      {
        transition: true,
        className: "fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      }
    ),
    /* @__PURE__ */ React4.createElement("div", { className: "fixed inset-0 flex" }, /* @__PURE__ */ React4.createElement(
      DialogPanel2,
      {
        transition: true,
        className: "relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
      },
      /* @__PURE__ */ React4.createElement(TransitionChild2, null, /* @__PURE__ */ React4.createElement("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0" }, /* @__PURE__ */ React4.createElement(
        "button",
        {
          type: "button",
          onClick: () => setSidebarOpen(false),
          className: "-m-2.5 p-2.5"
        },
        /* @__PURE__ */ React4.createElement("span", { className: "sr-only" }, "Close sidebar"),
        /* @__PURE__ */ React4.createElement(
          XMarkIcon2,
          {
            "aria-hidden": "true",
            className: "size-6 text-white"
          }
        )
      ))),
      /* @__PURE__ */ React4.createElement("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4" }, /* @__PURE__ */ React4.createElement("div", { className: "flex h-16 shrink-0 items-center" }, /* @__PURE__ */ React4.createElement(
        "img",
        {
          alt: "Your Company",
          src: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
          className: "h-8 w-auto"
        }
      )), /* @__PURE__ */ React4.createElement("nav", { className: "flex flex-1 flex-col" }, /* @__PURE__ */ React4.createElement("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7" }, /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement("ul", { role: "list", className: "-mx-2 space-y-1" }, navigation.map((item) => /* @__PURE__ */ React4.createElement("li", { key: item.name }, /* @__PURE__ */ React4.createElement(
        "a",
        {
          href: item.href,
          className: classNames(
            item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
            "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
          )
        },
        /* @__PURE__ */ React4.createElement(
          item.icon,
          {
            "aria-hidden": "true",
            className: classNames(
              item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600",
              "size-6 shrink-0"
            )
          }
        ),
        item.name
      ))))), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement("div", { className: "text-xs/6 font-semibold text-gray-400" }, "Your teams"), /* @__PURE__ */ React4.createElement("ul", { role: "list", className: "-mx-2 mt-2 space-y-1" }, teams.map((team) => /* @__PURE__ */ React4.createElement("li", { key: team.name }, /* @__PURE__ */ React4.createElement(
        "a",
        {
          href: team.href,
          className: classNames(
            team.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
            "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
          )
        },
        /* @__PURE__ */ React4.createElement(
          "span",
          {
            className: classNames(
              team.current ? "border-indigo-600 text-indigo-600" : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
              "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
            )
          },
          team.initial
        ),
        /* @__PURE__ */ React4.createElement("span", { className: "truncate" }, team.name)
      ))))), /* @__PURE__ */ React4.createElement("li", { className: "mt-auto" }, /* @__PURE__ */ React4.createElement(
        "a",
        {
          href: "#",
          className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
        },
        /* @__PURE__ */ React4.createElement(
          Cog6ToothIcon,
          {
            "aria-hidden": "true",
            className: "size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
          }
        ),
        "Settings"
      )))))
    ))
  ), /* @__PURE__ */ React4.createElement("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, /* @__PURE__ */ React4.createElement("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4" }, /* @__PURE__ */ React4.createElement("div", { className: "flex h-16 shrink-0 items-center" }, /* @__PURE__ */ React4.createElement(
    "img",
    {
      alt: "Your Company",
      src: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
      className: "h-8 w-auto"
    }
  ), "test"), /* @__PURE__ */ React4.createElement("nav", { className: "flex flex-1 flex-col" }, /* @__PURE__ */ React4.createElement(Lines2, { count: 100 })))), /* @__PURE__ */ React4.createElement("div", { className: "lg:pl-72" }, /* @__PURE__ */ React4.createElement("div", { className: "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8" }, /* @__PURE__ */ React4.createElement(
    "button",
    {
      type: "button",
      onClick: () => setSidebarOpen(true),
      className: "-m-2.5 p-2.5 text-gray-700 lg:hidden"
    },
    /* @__PURE__ */ React4.createElement("span", { className: "sr-only" }, "Open sidebar"),
    /* @__PURE__ */ React4.createElement(Bars3Icon2, { "aria-hidden": "true", className: "size-6" })
  ), /* @__PURE__ */ React4.createElement(
    "div",
    {
      "aria-hidden": "true",
      className: "h-6 w-px bg-gray-200 lg:hidden"
    }
  ), /* @__PURE__ */ React4.createElement("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6" }, /* @__PURE__ */ React4.createElement("form", { action: "#", method: "GET", className: "grid flex-1 grid-cols-1" }, /* @__PURE__ */ React4.createElement(
    "input",
    {
      name: "search",
      type: "search",
      placeholder: "Search",
      "aria-label": "Search",
      className: "col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6"
    }
  ), /* @__PURE__ */ React4.createElement(
    MagnifyingGlassIcon,
    {
      "aria-hidden": "true",
      className: "pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
    }
  )), /* @__PURE__ */ React4.createElement("div", { className: "flex items-center gap-x-4 lg:gap-x-6" }, /* @__PURE__ */ React4.createElement(
    "button",
    {
      type: "button",
      className: "-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
    },
    /* @__PURE__ */ React4.createElement("span", { className: "sr-only" }, "View notifications"),
    /* @__PURE__ */ React4.createElement(BellIcon, { "aria-hidden": "true", className: "size-6" })
  ), /* @__PURE__ */ React4.createElement(
    "div",
    {
      "aria-hidden": "true",
      className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
    }
  ), /* @__PURE__ */ React4.createElement(Menu, { as: "div", className: "relative" }, /* @__PURE__ */ React4.createElement(MenuButton, { className: "-m-1.5 flex items-center p-1.5" }, /* @__PURE__ */ React4.createElement("span", { className: "sr-only" }, "Open user menu"), /* @__PURE__ */ React4.createElement(
    "img",
    {
      alt: "",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      className: "size-8 rounded-full bg-gray-50"
    }
  ), /* @__PURE__ */ React4.createElement("span", { className: "hidden lg:flex lg:items-center" }, /* @__PURE__ */ React4.createElement(
    "span",
    {
      "aria-hidden": "true",
      className: "ml-4 text-sm/6 font-semibold text-gray-900"
    },
    "Tom Cook"
  ), /* @__PURE__ */ React4.createElement(
    ChevronDownIcon,
    {
      "aria-hidden": "true",
      className: "ml-2 size-5 text-gray-400"
    }
  ))), /* @__PURE__ */ React4.createElement(
    MenuItems,
    {
      transition: true,
      className: "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    },
    userNavigation.map((item) => /* @__PURE__ */ React4.createElement(MenuItem, { key: item.name }, /* @__PURE__ */ React4.createElement(
      "a",
      {
        href: item.href,
        className: "block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
      },
      item.name
    )))
  ))))), /* @__PURE__ */ React4.createElement("main", { className: "py-10" }, /* @__PURE__ */ React4.createElement("div", { className: "px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React4.createElement(Lines2, { count: 100 }))))));
}
export {
  ExampleDialog,
  ExampleDialogTwo,
  MyButton,
  add
};
