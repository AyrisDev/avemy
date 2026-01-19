"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import Link from "next/link";
import { ChevronRight, Building2, Gavel, Scale, ShieldCheck, Briefcase, Landmark } from "lucide-react";

import { Footer } from "@/app/components/layout/Footer";

import { Service, defaultPractices } from "@/lib/constants";

export default function ServicesListClient({ initialServices }: { initialServices: Service[] }) {
    const servicesToDisplay = initialServices && initialServices.length > 0 ? initialServices : defaultPractices;

    return (
        <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-gold selection:text-void">
            <Navbar />

            <section className="pt-48 pb-32 container mx-auto px-6">


                {/* dynamic list if exists, otherwise fallback to premium grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(servicesToDisplay.length > 0 ? servicesToDisplay : defaultPractices).map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/hizmetlerimiz/${service.Slug}`}>
                                <div className="bg-[#111111] border border-white/5 rounded-3xl p-10 h-full hover:border-gold/30 transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="mb-10 w-16 h-16 bg-gold/5 rounded-2xl flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                                        {(service as any).iconElement || <Scale className="text-gold" size={32} />}
                                    </div>

                                    <h2 className="text-2xl font-serif font-black mb-6 group-hover:text-gold transition-colors leading-tight">
                                        {service.Title}
                                    </h2>

                                    <p className="text-white/40 text-sm leading-relaxed mb-12 font-light line-clamp-3">
                                        {service.Short_Description}
                                    </p>

                                    <div className="flex items-center gap-3 text-gold text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-all">
                                        DETAYLARI İNCELE <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
            <FloatingActions />
        </main>
    );
}
