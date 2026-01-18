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
                    className="max-w-5xl mx-auto"
                >
                    <p className="text-3xl md:text-5xl font-serif font-black text-white italic leading-tight mb-16">
                        "Her şey kanun yapmaktan ibaret değildir. Aksine her şey o kanunları uygulamak ve uygulattırmaktan ibarettir."
                    </p>

                    <footer className="flex flex-col items-center">
                        <div className="w-12 h-[1px] bg-gold mb-8 opacity-40" />
                        <div className="text-gold font-serif font-black text-2xl md:text-3xl tracking-[0.1em] mb-2 ">
                            Mustafa Kemal ATATÜRK
                        </div>
                    </footer>
                </motion.blockquote>
            </div>
        </section>
    );
};
