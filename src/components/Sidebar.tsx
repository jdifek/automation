"use client";

import {
  LayoutDashboard,
  Calendar,
  BarChart2,
  MessageSquare,
  Settings,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct hook for getting the pathname in App Router

const Sidebar = () => {
  const pathname = usePathname(); // Use usePathname hook to get the current path
  const { data: session, status } = useSession();

  const isLoggedIn = status === "authenticated";

  console.log(session);

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
        <div className="mt-6 px-6">
          {isLoggedIn ? (
            <>
              <Link
                href="/profile"
                className="block mb-3 text-gray-700 hover:text-indigo-600"
              >
                Profile
              </Link>
              <button
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
                className="block w-full text-left text-gray-700 hover:text-red-600"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link
              href="/api/auth/signin"
              className="block text-gray-700 hover:text-indigo-600"
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
