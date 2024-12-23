import { Link } from "react-router-dom";
import { Send } from "lucide-react";

export const Dashboard = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <Link
        to={"/dashboard/telegram"}
        className="flex items-center justify-center w-28 h-28 rounded-full bg-blue-500 text-white hover:bg-blue-600"
      >
        <div className="flex items-center">
          <Send className="mb-1" />
          <span>Telegram</span>
        </div>
      </Link>
    </>
  );
};
