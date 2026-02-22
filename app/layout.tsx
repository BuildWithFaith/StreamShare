import { Footer } from "@/components/footer";
import { MenuBar } from "@/components/menu-bar";
import { Navigate } from "@/components/Navigation";
import { Toaster } from "@/components/ui-toast";
import { PeerProvider } from "@/contexts/PeerContext";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import type React from "react";
import "./globals.css";

const Font = Nunito({ weight: "400", display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://streamshare.vercel.app"),
  title: {
    default: "StreamShare | Peer-to-Peer File Sharing & Video Calling",
    template: "%s | StreamShare",
  },
  description:
    "StreamShare offers secure, real-time peer-to-peer file sharing and HD video calling directly in your browser. No downloads, no server uploads - just instant, private communication with end-to-end encryption.",
  keywords: [
    "peer-to-peer",
    "file sharing",
    "video calling",
    "WebRTC",
    "secure file transfer",
    "HD video call",
    "P2P communication",
    "browser file sharing",
    "encrypted video call",
    "real-time file transfer",
    "online meetings",
    "virtual meetings",
    "screen sharing",
    "virtual background",
    "drag and drop upload",
    "no download required",
    "privacy-focused",
    "end-to-end encryption",
  ],
  authors: [{ name: "Muhammad Wahaj", url: "https://contra.com/muhammadwahajofficiall_f1yj87dw/services" }],
  creator: "Muhammad Wahaj",
  publisher: "Muhammad Wahaj",
  applicationName: "StreamShare",
  category: "Communication",
  classification: "Web Application",
  verification: {
    google: "ooOuBalAM5rJ67-HcQLZsEF1FCSsUysz0YPz6nC90Ds",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://streamshare.vercel.app",
    siteName: "StreamShare",
    title: "StreamShare | Peer-to-Peer File Sharing & Video Calling",
    description:
      "Experience seamless communication with StreamShare. Secure peer-to-peer file sharing and HD video calls with no server uploads, no downloads - just instant, private connections.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StreamShare - Secure P2P File Sharing and Video Calling",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamShare | Peer-to-Peer File Sharing & Video Calling",
    description:
      "Secure, real-time P2P file sharing and HD video calls. No downloads, no server uploads - just instant, private communication.",
    images: ["/twitter-image.png"],
    creator: "@muhammadwahaj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
  },
};

export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  { media: "(prefers-color-scheme: dark)", color: "#000000" },
];

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={Font.className} suppressHydrationWarning>
      <body className="antialiased relative min-h-screen w-full bg-[url('/background_image.jpg')] bg-fixed bg-center bg-cover overflow-hidden">
        <PeerProvider>
          <MenuBar />
          <div className="absolute inset-0 backdrop-blur-md bg-black/20 pointer-events-none"></div>
          <main className="pb-16">{children}</main>
          <Toaster />
          <Navigate />
          <Footer />
        </PeerProvider>
      </body>
    </html>
  );
}
