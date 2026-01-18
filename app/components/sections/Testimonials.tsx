"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Testimonials = () => {
    return (
        <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center mb-12"
                >
                    <Quote size={60} className="text-gold opacity-40" />
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <p className="text-3xl md:text-5xl font-serif font-medium text-white italic leading-tight mb-12">
                        "Prestige Law tarafından sunulan stratejik öngörü ve mutlak gizlilik seviyesi hukuk sektöründe eşsizdir. Onlar sadece dava kazanmıyorlar; mirasları koruyorlar."
                    </p>

                    <footer className="flex flex-col items-center">
                        <div className="text-white font-bold tracking-[0.2em] uppercase mb-1">
                            ALEXANDER VANCE
                        </div>
                        <div className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
                            CEO. GLOBAL LOGISTICS CORP
                        </div>
                    </footer>
                </motion.blockquote>
            </div>
        </section>
    );
};
