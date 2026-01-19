"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Scale } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        { label: "HİZMETLER", href: "/hizmetlerimiz" },
        { label: "BLOG", href: "/blog" },
        { label: "MAKALELER", href: "/makaleler" },
        { label: "İLETİŞİM", href: "/iletisim" },
    ];

    return (
        <>
            <motion.nav
                style={{ background }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[60] h-24 flex items-center transition-all duration-300 px-6 md:px-12",
                    isScrolled ? "backdrop-blur-md border-b border-white/5" : ""
                )}
            >
                <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex-1 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <img
                                src="/ek_logo.png"
                                alt="EK Hukuk Logo"
                                className="h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                            <span className="text-xl font-serif font-black tracking-tighter text-white uppercase flex items-center translate-y-1">
                                EK<span className=" text-gold">HUKUK</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Center Menu */}
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

                    {/* Mobile Menu Toggle */}
                    <div className="flex-1 flex md:hidden justify-end">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                                className="w-6 h-[1px] bg-white block transition-transform"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-6 h-[1px] bg-white block"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                                className="w-6 h-[1px] bg-white block transition-transform"
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-[55] bg-void flex flex-col items-center justify-center md:hidden"
            >
                <div className="flex flex-col items-center gap-8">
                    {menuItems.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                        >
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-serif font-black text-white hover:text-gold transition-colors tracking-tight"
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-12 text-center"
                >
                    <p className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase">
                        EK HUKUK & DANIŞMANLIK
                    </p>
                </motion.div>
            </motion.div>
        </>
    );
};
