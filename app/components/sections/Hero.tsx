"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import { Calendar } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A] pt-20">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pt-10 lg:pt-0">
                {/* Person Image (Left) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="lg:col-span-6 relative h-[40vh] md:h-[60vh] lg:h-[90vh]"
                >
                    <div className="relative w-full h-full overflow-hidden">
                        <img
                            src="/lawyer_v3.png"
                            alt="Elite Counsel"
                            className="w-full h-full object-contain object-center lg:object-left filter grayscale-[0.8] contrast-[1.1] brightness-[0.85] hover:grayscale-0 transition-all duration-1000 scale-[0.9] lg:scale-[1] origin-center lg:origin-left"
                            loading="eager"
                        />
                        {/* Subtle Right Blend to ensure text contrast if needed */}
                        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 hidden lg:block" />
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 lg:hidden" />
                    </div>
                </motion.div>

                {/* Text Content (Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="lg:col-span-6 flex flex-col justify-center items-start z-20 bg-transparent min-h-full"
                >
                    <div className="flex items-start gap-4 mb-10">
                        <div className="w-16 h-[1px] bg-gold mt-2" />
                        <div className="flex flex-col gap-2">
                            <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase">
                                EK HUKUK & DANIŞMANLIK
                            </span>
                            <span className="text-white/40 text-[11px] font-serif font-bold tracking-widest text-right">
                                AV. EMİNA KARABUDAK
                            </span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-[1.1] lg:leading-[0.85] mb-8 lg:mb-10 tracking-tighter">
                        Güçlü Temsil, <br className="hidden md:block" />
                        <span className="text-gold italic"> Sarsılmaz </span> <br className="hidden md:block" />
                        Adalet.
                    </h1>

                    <p className="text-base lg:text-xl text-white/40 mb-8 lg:mb-12 max-w-xl leading-relaxed font-light">
                        Gizlilik, kararlılık ve başarı odaklı yaklaşımımızla tüm hukuki süreçlerinizde güvenle yanınızdayız.</p>

                    <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start sm:items-center w-full">
                        <Link href="/iletisim" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-10 lg:px-12 py-5 lg:py-6 bg-gold text-void font-black text-[10px] lg:text-[11px] tracking-[0.3em] uppercase shadow-2xl shadow-gold/20 hover:brightness-110 transition-all"
                            >
                                RANDEVU TALEP ET
                            </motion.button>
                        </Link>

                        <div className="flex flex-col">
                            <span className="text-white/20 text-[8px] lg:text-[9px] font-black tracking-widest uppercase mb-1">KIŞISEL DANIŞMANLIK</span>
                            <a href="tel:+905421458713" className="text-white font-serif italic text-lg hover:text-gold transition-colors">
                                +90 (542) 145 87 13
                            </a>
                        </div>
                    </div>

                    {/* Branding Decorative Text */}
                    <div className="mt-16 lg:mt-20 opacity-5 select-none pointer-events-none hidden md:block">
                        <span className="text-[120px] font-serif font-black text-white leading-none uppercase">EK HUKUK</span>
                    </div>
                </motion.div>
            </div>


        </section>
    );
};
