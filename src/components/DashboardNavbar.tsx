"use client";

import * as React from 'react';
import {Button, Menu, MenuItem, MenuItemProps, MenuTrigger, Popover, Separator,} from "react-aria-components";
import {UserAvatar} from "@/components/user/UserAvatar";
import {signOut, useSession} from "next-auth/react";


export const DashboardNavbar = () => {
  const { data: session} = useSession();

  if (!session?.user) {
    return <></>;
  }

  // const handleSignOut = async () => {
  //   const response = await fetch('/api/auth/signout', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //
  //   if (response.ok) {
  //     window.location.href = '/';
  //   } else {
  //     console.error("Failed to sign out");
  //   }
  // };

  return (
    <div className="bg-gray-50 dark:bg-zinc-900 rounded-lg flex items-start justify-center">
      <MenuTrigger>
        <Button
          aria-label="Account"
          className="inline-flex items-center justify-center rounded-md text-white bg-transparent border-none hover:bg-gray-200 pressed:bg-gray-300 dark:hover:bg-zinc-800 dark:pressed:bg-zinc-700 transition-colors cursor-default outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <UserAvatar user={session.user} />
        </Button>
        <Popover
          className="p-2 overflow-auto outline-hidden rounded-lg bg-white dark:bg-zinc-950 shadow-lg ring-1 ring-black/10 dark:ring-white/15 entering:animate-in entering:fade-in entering:placement-bottom:slide-in-from-top-1 entering:placement-top:slide-in-from-bottom-1 exiting:animate-out exiting:fade-out exiting:placement-bottom:slide-out-to-top-1 exiting:placement-top:slide-out-to-bottom-1 fill-mode-forwards origin-top-left">
          <div className="flex gap-2 items-center mx-3 mt-2">
            <UserAvatar user={session.user} />
            <div className="flex flex-col gap-1">
              <div className="text-[15px] font-bold text-gray-900 dark:text-gray-100 leading-none">
                {session.user.name}
              </div>
              <div className="text-base text-gray-900 dark:text-gray-100 leading-none mb-1">
                {session.user.email}
              </div>
            </div>
          </div>
          <Separator className="border-none bg-gray-300 dark:bg-zinc-600 h-[1px] mx-3 mt-4 mb-2"/>
          <Menu className="outline-hidden">
            <MyMenuItem id="new">Account Settings</MyMenuItem>
            <MyMenuItem id="open">Support</MyMenuItem>
            <Separator className="bg-gray-300 dark:bg-zinc-600 h-[1px] mx-3 my-2"/>
            <MyMenuItem id="save">Legal notices</MyMenuItem>
            <MyMenuItem id="save-as">About</MyMenuItem>
            <Separator className="bg-gray-300 dark:bg-zinc-600 h-[1px] mx-3 my-2"/>
            <MyMenuItem id="print" onAction={signOut}>Sign out</MyMenuItem>

          </Menu>
        </Popover>
      </MenuTrigger>
    </div>
  );
};

function MyMenuItem(props: MenuItemProps) {
  return (
    <MenuItem
      {...props}
      className="group flex w-full items-center rounded-md px-3 py-2 box-border outline-hidden cursor-default text-gray-900 dark:text-gray-100 focus:bg-blue-500 focus:text-white"
    />
  );
}
