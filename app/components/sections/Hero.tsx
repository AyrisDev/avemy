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

            <div className="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Person Image (Left) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="lg:col-span-6 relative h-[70vh] lg:h-[90vh]"
                >
                    <div className="relative w-full h-full overflow-hidden">
                        <img
                            src="/lawyer_v3.png"
                            alt="Elite Counsel"
                            className="w-full h-full object-contain object-left filter grayscale-[0.8] contrast-[1.1] brightness-[0.85] hover:grayscale-0 transition-all duration-1000 scale-[0.8] origin-left"
                            loading="eager"
                        />
                        {/* Subtle Right Blend to ensure text contrast if needed */}
                        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
                    </div>
                </motion.div>

                {/* Text Content (Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="lg:col-span-6 flex flex-col justify-center items-start z-20 bg-transparent min-h-full"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-[1px] bg-gold" />
                        <span className="text-gold text-[10px] font-black tracking-[0.5em] uppercase">
                            PRESTIGE LAW INTERNATIONAL
                        </span>
                    </div>

                    <h1 className="text-7xl md:text-7xl font-serif font-black text-white leading-[0.85] mb-10 tracking-tighter">
                        Güçlü Temsil, <br />
                        <span className="text-gold italic"> Sarsılmaz </span> <br />
                        Adalet.
                    </h1>

                    <p className="text-xl text-white/40 mb-12 max-w-xl leading-relaxed font-light">
                        Türkiye'nin en karmaşık hukuki süreçlerinde, mutlak gizlilik ve üstün stratejik başarı ile yanınızdayız. Geleceğinizi tesadüflere değil, tecrübeye emanet edin.
                    </p>

                    <div className="flex flex-wrap gap-8 items-center">
                        <Link href="/iletisim">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-12 py-6 bg-gold text-void font-black text-[11px] tracking-[0.3em] uppercase shadow-2xl shadow-gold/20 hover:brightness-110 transition-all"
                            >
                                ŞİMDİ RANDEVU ALIN
                            </motion.button>
                        </Link>

                        <div className="flex flex-col">
                            <span className="text-white/20 text-[9px] font-black tracking-widest uppercase mb-1">KIŞISEL DANIŞMANLIK</span>
                            <span className="text-white font-serif italic text-lg">+90 (212) 555 00 00</span>
                        </div>
                    </div>

                    {/* Branding Decorative Text */}
                    <div className="mt-20 opacity-5 select-none pointer-events-none">
                        <span className="text-[120px] font-serif font-black text-white leading-none">PRESTIGE</span>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Floating Button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 bg-gold px-6 py-4 rounded-full shadow-2xl group"
            >
                <div className="w-8 h-8 rounded-full bg-void/10 flex items-center justify-center">
                    <Calendar size={16} className="text-void" />
                </div>
                <span className="text-void font-bold text-[10px] tracking-widest uppercase">
                    ÜCRETSİZ DANIŞMANLIK
                </span>
            </motion.button>
        </section>
    );
};
