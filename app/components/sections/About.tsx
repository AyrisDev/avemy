"use client";

import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section className="py-24 bg-void/50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Sticky Image Side */}
                    <div className="lg:sticky lg:top-32 h-[400px] md:h-[600px] w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-full glass rounded-3xl overflow-hidden relative border border-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-10" />
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-serif italic text-3xl">
                                Vizyon & Misyon
                            </div>
                            {/* Replace with actual image */}
                            <div className="absolute bottom-8 left-8 z-20">
                                <div className="text-gold font-serif text-3xl font-bold mb-2">Av. M. Ali Yıldız</div>
                                <div className="text-white/60 text-sm tracking-widest uppercase">Kurucu Ortak</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scrolling Text Side */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                                Hukukta <span className="text-gold">Yeni Bir Perspektif</span>
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-6">
                                Antigravity Design System ile kurguladığımız bu platform, sadece bir web sitesi değil; müvekkillerimizle kurduğumuz şeffaf ve modern bağın bir yansımasıdır.
                            </p>
                            <p className="text-white/60 leading-relaxed">
                                Klasik hukuk anlayışının ağırlığını, teknolojik çeviklik ve modern yaklaşımlarla hafifletiyoruz. Dava süreçlerinizi birer "yük" olmaktan çıkarıp, stratejik birer "adım" haline getiriyoruz.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            <div className="glass p-8 rounded-2xl border-white/5">
                                <div className="text-3xl font-serif font-bold text-gold mb-2">2010</div>
                                <div className="text-white/80 font-bold mb-2">Kuruluş</div>
                                <p className="text-white/40 text-sm italic">Hukuk ve adaletin teknolojiyle buluştuğu ilk nokta.</p>
                            </div>
                            <div className="glass p-8 rounded-2xl border-white/5">
                                <div className="text-3xl font-serif font-bold text-gold mb-2">500+</div>
                                <div className="text-white/80 font-bold mb-2">Başarı</div>
                                <p className="text-white/40 text-sm italic">Kazanılmış davalar ve memnun müvekkil portföyü.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass p-8 rounded-2xl border-l-4 border-l-gold"
                        >
                            <blockquote className="text-white/80 italic text-xl font-serif leading-relaxed">
                                "Bizim için adalet, sadece yasaların uygulanması değil; her bireyin hakkının en estetik ve en hızlı şekilde teslim edilmesidir."
                            </blockquote>
                            <div className="mt-4 text-gold font-bold">— Antigravity Manifestosu</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
