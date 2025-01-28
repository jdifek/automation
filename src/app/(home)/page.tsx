
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";

export default async function Dashboard() {
  const menuItems = [
    { icon: FaTelegramPlane, label: "Telegram", path: "/dashboard/telegram" },
    { icon: FaInstagram, label: "Instagram", path: "/dashboard/instagram" },
    { icon: FaTiktok, label: "TikTok", path: "/dashboard/tiktok" },
    { icon: FaFacebook, label: "Facebook", path: "/dashboard/facebook" },
  ];


  return (
    <>
      <div>
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className="flex flex-col items-center justify-center w-full h-28 bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <Icon className="w-6 h-6" />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
