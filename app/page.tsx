"use client";

import AppSeo from "@/components/AppSeo";
import { toast } from "@/components/ui-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePeer } from "@/contexts/PeerContext";
import {
  Check,
  Clipboard,
  Copy,
  HelpCircle,
  Link,
  QrCode,
  UserMinus,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export default function Home() {
  const {
    peerId,
    isConnected,
    connectedPeerId,
    connectToPeer,
    disconnectPeer,
  } = usePeer();
  const [recipientId, setRecipientId] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const copyPeerId = () => {
    const doFallbackCopy = (text: string) => {
      const el = document.createElement("textarea");
      el.value = text;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
      } catch (e) {
        // ignore - we'll show an error below if needed
      }
      document.body.removeChild(el);
    };

    (async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(peerId);
        } else {
          doFallbackCopy(peerId);
        }
        toast.success("Peer ID copied to clipboard");
      } catch (err) {
        // Try fallback once more then show an error
        try {
          doFallbackCopy(peerId);
          toast.success("Peer ID copied to clipboard");
        } catch (e) {
          toast.error("Could not copy Peer ID. Check browser permissions");
        }
      }
    })();
  };

  const handleConnect = () => {
    if (recipientId.trim()) {
      connectToPeer(recipientId.trim());
    } else {
      toast.error("Please enter a valid Peer ID to connect");
    }
  };

  const handlePaste = async () => {
    try {
      if (!navigator.clipboard || !navigator.clipboard.readText) {
        toast.error("Paste not supported in this browser");
        return;
      }
      const clipboardText = await navigator.clipboard.readText();
      if (clipboardText.trim()) {
        setRecipientId(clipboardText.trim());
      } else {
        toast.error("Your clipboard doesn't contain any text");
      }
    } catch (error) {
      toast.error("Could not access clipboard. Please check browser permissions or try again");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <AppSeo />
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl rounded-2xl border border-white/20 bg-white/5 shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-extrabold text-white">Streamlet</h2>
            <Button
              onClick={() => setShowHelp(!showHelp)}
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white rounded-full"
              title="How to use"
            >
              <HelpCircle size={20} />
            </Button>
          </div>

          {/* Help Section */}
          <AnimatePresence>
            {showHelp && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-3 mb-4">
                  <h3 className="text-white font-medium text-sm mb-2">
                    How to connect:
                  </h3>
                  <ol className="text-white/80 text-xs space-y-2 list-decimal pl-4">
                    <li>
                      Share your Peer ID with your friend (copy/paste or QR
                      code)
                    </li>
                    <li>Ask your friend for their Peer ID</li>
                    <li>
                      Enter their Peer ID in the input field and click Connect
                    </li>
                    <li>
                      Once connected, you can share files and start video calls
                    </li>
                  </ol>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Peer ID Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-white/70 text-sm">Your Peer ID:</p>
              <p className="text-white/50 text-xs">Share this with others</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 px-3 py-2 rounded-xl border border-white/10 backdrop-blur-md font-mono text-white text-sm truncate">
                {peerId}
              </div>
              <Button
                onClick={copyPeerId}
                variant="ghost"
                size="icon"
                className="text-white rounded-xl backdrop-blur-md hover:bg-white/10"
                title="Copy to clipboard"
              >
                <Copy size={18} />
              </Button>
              <Button
                onClick={() => setShowQR(true)}
                variant="ghost"
                size="icon"
                className="text-white rounded-xl backdrop-blur-md hover:bg-white/10"
                title="Show QR code"
              >
                <QrCode size={18} />
              </Button>
            </div>
          </div>

          {/* Connection Section */}
          <div className="min-h-32 mb-4">
            <AnimatePresence mode="wait">
              {isConnected ? (
                <motion.div
                  key="connected"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center"
                >
                  <div className="rounded-xl bg-green-600/15 border border-green-500/30 text-green-200 flex flex-col items-center p-3 w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center">
                        <Check className="size-3" />
                      </div>
                      <span className="font-medium">Connected</span>
                    </div>
                    <p className="text-xs font-mono mb-2 opacity-80">
                      ID: <span>{connectedPeerId?.substring(0, 8)}...</span>
                    </p>
                    <p className="text-xs text-center mb-2">
                      You can now share files and start video calls
                    </p>
                    <Button
                      onClick={disconnectPeer}
                      variant="outline"
                      size="sm"
                      className="bg-red-500/20 hover:text-white hover:bg-red-500/30 text-red-200 border-red-500/30 text-xs w-full"
                    >
                      <UserMinus size={12} className="mr-1" />
                      Disconnect
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="disconnected"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white/80 text-sm mb-2">
                    Enter your friend's Peer ID to connect:
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <Input
                      value={recipientId}
                      onChange={(e) => {
                        console.log("recipient input change:", e.target.value);
                        setRecipientId(e.target.value);
                      }}
                      onFocus={() => console.log("recipient input focus")}
                      onBlur={() => console.log("recipient input blur")}
                      placeholder="Paste friend's Peer ID here"
                      className="flex-1 bg-transparent border-white/10 text-white placeholder:text-white/50 rounded-xl focus:border-white/30 focus:ring-white/20 text-sm"
                    />
                    <Button
                      onClick={handlePaste}
                      variant="ghost"
                      size="icon"
                      className="text-white rounded-xl backdrop-blur-md border border-white/10 hover:bg-white/10"
                      title="Paste from clipboard"
                    >
                      <Clipboard size={18} />
                    </Button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleConnect}
                    className="w-full py-2 px-4 flex items-center justify-center text-white rounded-xl backdrop-blur-md transition-all duration-300 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30"
                  >
                    <Link size={18} className="mr-2" />
                    Connect
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Status indicator */}
          <div className="flex items-center justify-center">
            <div
              className={`w-2 h-2 rounded-full ${
                isConnected ? "bg-green-500" : "bg-white/30"
              } mr-2 animate-pulse`}
            ></div>
            <span className="text-xs text-white/70">
              {isConnected
                ? "Online - Ready to share"
                : "Waiting for connection"}
            </span>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowQR(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="p-6 rounded-2xl border border-white/20 shadow-2xl bg-black/30 backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="text-center">
                <h3 className="text-lg font-medium text-white mb-3">
                  Peer ID QR Code
                </h3>
                <p className="text-white/70 text-xs mb-3">
                  Let others scan this to connect with you
                </p>
                <div className="bg-white p-3 rounded-xl shadow-inner">
                  <QRCodeSVG value={peerId} size={180} />
                </div>
                <Button
                  onClick={() => setShowQR(false)}
                  variant="ghost"
                  className="mt-4 text-white bg-black/20 hover:bg-black/30 rounded-xl backdrop-blur-md border border-white/10 text-sm"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
