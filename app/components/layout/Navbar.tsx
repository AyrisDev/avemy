"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Scale } from "lucide-react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const background = useTransform(
        scrollY,
        [0, 100],
        ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.9)"]
    );

    useEffect(() => {
        const updateScrolled = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", updateScrolled);
        return () => window.removeEventListener("scroll", updateScrolled);
    }, []);

    const menuItems = [
        { label: "HAKKIMIZDA", href: "/hakkimizda" },
        { label: "HİZMETLER", href: "/hizmet" },
        { label: "BLOG", href: "/blog" },
        { label: "MAKALELER", href: "/makaleler" },
        { label: "İLETİŞİM", href: "/iletisim" },
    ];

    return (
        <motion.nav
            style={{ background }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 h-24 flex items-center transition-all duration-300 px-6 md:px-12",
                isScrolled ? "backdrop-blur-md border-b border-white/5" : ""
            )}
        >
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex-1 flex items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-9 h-9 bg-gold rounded-sm flex items-center justify-center transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-700">
                            <div className="w-5 h-5 bg-void rounded-sm -rotate-45 flex items-center justify-center">
                                <div className="w-2 h-2 bg-gold rounded-full" />
                            </div>
                        </div>
                        <span className="text-xl font-serif font-black tracking-tighter text-white uppercase flex items-center">
                            PRESTIGE&nbsp;<span className="font-medium">LAW</span>
                        </span>
                    </Link>
                </div>

                {/* Center Menu */}
                <div className="hidden md:flex items-center justify-center gap-12">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-[10px] font-bold text-white/50 hover:text-white transition-colors duration-200 tracking-[0.3em] uppercase"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right Buttons Section */}
                <div className="flex-1 flex items-center justify-end gap-3 text-right">
                    <button className="hidden lg:block border border-white/20 text-white/90 px-7 py-2.5 rounded-full text-[9px] font-bold tracking-[0.2em] hover:bg-white/5 transition-all">
                        PORTAL
                    </button>
                    <button className="bg-[#FFCC00] text-void px-9 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] hover:brightness-110 shadow-[0_4px_20px_rgba(255,204,0,0.2)] transition-all">
                        İLETİŞİM
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};
