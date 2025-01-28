"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Provider from "./provider";
import RegisterForm from "./auth/page"; 
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); 

  useEffect(() => {
    const getSession = async () => {
      const supabase = createClient();
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
          router.push("/auth"); 
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        setAuthenticated(false);
        router.push("/auth");
      } finally {
        setLoading(false);
      }
    };

    getSession();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <html lang="en">
      <body>
        {!authenticated ? (
          <>
            <RegisterForm />
          </>
          
        ) : (
          <Provider>
            <Sidebar/>
            {children}
          </Provider>
        )}
      </body>
    </html>
  );
}
