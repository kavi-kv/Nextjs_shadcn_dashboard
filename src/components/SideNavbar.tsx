"use client";

import React from "react";
import { useState } from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ChevronLeft,
  ChevronRight,
  File,
  Inbox,
  LayoutDashboard,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  Settings,
  ShoppingCart,
  Trash2,
  UserRound,
  Users2,
} from "lucide-react";
import { useWindowWidth } from "@react-hook/window-size";
import { Nav } from "./UI/nav";
import { Button } from "./UI/button";

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const windowWidth = useWindowWidth();
  const mobileWIdth = windowWidth < 768;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWIdth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWIdth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UserRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
