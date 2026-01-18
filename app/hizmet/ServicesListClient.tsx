"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import Link from "next/link";
import { ChevronRight, Building2, Gavel, Scale, ShieldCheck, Briefcase, Landmark } from "lucide-react";
import Image from "next/image";
import { getDirectusImage } from "@/lib/directus";

interface Service {
    id: string;
    Slug: string;
    Title: string;
    Short_Description: string;
    Icon?: string;
}

const defaultPractices = [
    {
        Title: "Ticaret ve Şirketler Hukuku",
        Short_Description: "Küresel şirketler ve birleşme-devralma süreçleri için sofistike çözümler.",
        Slug: "ticaret-ve-sirketler-hukuku",
        iconElement: <Building2 className="text-gold" size={32} />
    },
    {
        Title: "Aile ve Boşanma Hukuku",
        Short_Description: "Karmaşık aile hukuku ve miras uyuşmazlıkları için uzman temsil.",
        Slug: "aile-ve-bosanma-hukuku",
        iconElement: <Scale className="text-gold" size={32} />
    },
    {
        Title: "Gayrimenkul Hukuku",
        Short_Description: "Yüksek değerli gayrimenkul projeleri ve tapu uyuşmazlıkları yönetimi.",
        Slug: "gayrimenkul-hukuku",
        iconElement: <Landmark className="text-gold" size={32} />
    },
    {
        Title: "Ceza Hukuku",
        Short_Description: "Beyaz yakalı suçları ve karmaşık ceza davaları için stratejik savunma.",
        Slug: "ceza-hukuku",
        iconElement: <Gavel className="text-gold" size={32} />
    },
    {
        Title: "Varlık ve Miras Yönetimi",
        Short_Description: "Gelecek nesillere miras bırakılacak varlıkların hukuki güven altına alınması.",
        Slug: "varlik-ve-miras-yonetimi",
        iconElement: <Briefcase className="text-gold" size={32} />
    },
    {
        Title: "Bilişim ve Teknoloji Hukuku",
        Short_Description: "Dijital varlıklar, veri koruma ve teknoloji girişimleri için güncel destek.",
        Slug: "bilisim-ve-teknoloji-hukuku",
        iconElement: <ShieldCheck className="text-gold" size={32} />
    }
];

export default function ServicesListClient({ initialServices }: { initialServices: Service[] }) {
    const servicesToDisplay = initialServices.length > 0 ? initialServices : [];

    return (
        <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-gold selection:text-void">
            <Navbar />

            <section className="pt-48 pb-32 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-32"
                >
                    <div className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
                        YETKİNLİK ALANLARIMIZ
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-8">
                        Hukuki <span className="text-gold">Mükemmeliyet</span>
                    </h1>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Karmaşık hukuki zorlukları, vizyoner bir bakış açısı ve mutlak bir gizlilikle çözüme kavuşturuyoruz.
                    </p>
                </motion.div>

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
                            <Link href={`/hizmet/${service.Slug}`}>
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

            <FloatingActions />
        </main>
    );
}
