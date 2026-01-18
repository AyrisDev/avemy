"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "99%", label: "BAŞARI ORANI" },
    { value: "25+", label: "YILLIK DENEYİM" },
    { value: "$500M+", label: "KAZANILAN TAZMİNAT" },
    { value: "40+", label: "UZMAN AVUKAT" },
];

export const TrustStrip = () => {
    return (
        <section className="bg-[#0A0A0A] border-y border-white/5">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center md:items-start"
                        >
                            <div className="text-4xl md:text-5xl font-serif font-black text-gold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
