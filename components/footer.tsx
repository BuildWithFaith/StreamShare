"use client"

import { Heart } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null)

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    if (!currentYear) return null

    return (
        <motion.footer
            className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-4 py-2 shadow-lg"
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
                        <span className="text-white/80 flex items-center gap-1">
                            © {currentYear} StreamShare
                        </span>
                        <span className="hidden sm:inline text-white/40">•</span>
                        <Link
                            href="https://contra.com/muhammadwahajofficiall_f1yj87dw/services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200"
                        >
                            <span>Developed and Designed with</span>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-red-400 text-red-400" />
                            </motion.div>
                            <span>by</span>
                            <span className="font-medium text-white group-hover:underline underline-offset-2">
                                Muhammad Wahaj
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    )
}
