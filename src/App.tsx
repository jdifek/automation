// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Analytics } from "./components/Analytics";
import { PostScheduler } from "./components/PostScheduler";
import { AutoResponder } from "./components/AutoResponder";
import { Dashboard } from "./components/Dashboard";
import InstagramPostManager from "./components/PostCretor/InstagramPostManager";
import TelegramPostManager from "./components/PostCretor/TelegramPostManager";
import TikTokPostManager from "./components/PostCretor/TikTokPostManager";
import FacebookPostManager from "./components/PostCretor/FacebookPostManager";
// import { PostCreator } from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/dashboard/telegram"
              element={<TelegramPostManager />}
            />
            <Route
              path="/dashboard/instagram"
              element={<InstagramPostManager />}
            />
            <Route path="/dashboard/tiktok" element={<TikTokPostManager />} />
            <Route
              path="/dashboard/facebook"
              element={<FacebookPostManager />}
            />
            <Route path="/schedule" element={<PostScheduler />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/responses" element={<AutoResponder />} />
            <Route
              path="/settings"
              element={
                <div>
                  <h1 className="text-2xl font-bold">Settings</h1>
                  {/* Add settings component */}
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
