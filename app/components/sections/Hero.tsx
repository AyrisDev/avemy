"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import { Calendar } from "lucide-react";
import Image from "next/image";

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

            <div className="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Person Image (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative aspect-[3/4] w-full max-w-lg mx-auto overflow-hidden rounded-bl-[100px]">
                        <Image
                            src="/professional_lawyer_cutout_1768744824328.png"
                            alt="Elite Counsel"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                    </div>
                </motion.div>

                {/* Text Content (Right) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="lg:col-span-7 pl-0 lg:pl-12"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-gold" />
                        <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                            EST. 1992
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-[0.9] mb-8">
                        Adalet <br />
                        Kusursuzlukla <br />
                        <span className="text-gold italic">Tanımlanır.</span>
                    </h1>

                    <p className="text-lg text-white/50 mb-12 max-w-md leading-relaxed font-light">
                        En karmaşık hukuki meseleler için üst düzey temsil. En zorlu müvekkillerimiz için gizlilik, strateji ve eşsiz sonuçlar sunuyoruz.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-gold text-void font-bold text-xs tracking-widest uppercase shadow-[0_20px_40px_rgba(212,175,55,0.2)]"
                        >
                            HEMEN DANIŞIN
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 border border-white/20 text-white font-bold text-xs tracking-widest uppercase hover:bg-white/5 transition-colors"
                        >
                            VİZYONUMUZ
                        </motion.button>
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
