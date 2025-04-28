import { MenuBar } from "@/components/menu-bar";
import { Navigate } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { Toaster } from "@/components/ui-toast";
import { PeerProvider } from "@/contexts/PeerContext";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "File Sharing and Video Call App",
  description: "A peer-to-peer file sharing and Video Calling app Fast and Secure ",
  verification: {
    google: "ooOuBalAM5rJ67-HcQLZsEF1FCSsUysz0YPz6nC90Ds"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <PeerProvider>
          <MenuBar />
          <main className="relative min-h-screen w-full bg-[url('/background_image.jpg')] bg-fixed bg-center bg-cover overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Toaster/>
          <Navigate />
        </PeerProvider>
      </body>
    </html>
  );
}