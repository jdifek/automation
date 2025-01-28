"use client";

import { logout } from "@/app/logaut/actions";
import {
  LayoutDashboard,
  Calendar,
  BarChart2,
  MessageSquare,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct hook for getting the pathname in App Router

const Sidebar = () => {
  const pathname = usePathname(); // Use usePathname hook to get the current path

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: BarChart2, label: "Analytics", path: "/analytics" },
    { icon: MessageSquare, label: "Auto-responses", path: "/responses" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-indigo-600">SocialHub</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path; // Compare pathname instead of router.pathname
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 ${
                isActive ? "bg-indigo-50 text-indigo-600" : ""
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}

        <form>
          <button className="text-gray-700 hover:bg-red-50 hover:text-indigo-600 px-6 py-3" formAction={logout}>Logaut</button>
        </form>
      </nav>
    </div>
  );
};

export default Sidebar;
