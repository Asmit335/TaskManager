import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  console.log("id:", userId);

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* {userId && <Sidebar />} */}
          <Sidebar />
          <main className="flex-1 p-4 m-4">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
