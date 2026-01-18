"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gavel, Users, Landmark, Briefcase, ChevronRight } from "lucide-react";

import Link from "next/link";

const practices = [
    {
        title: "Ceza Hukuku",
        slug: "ceza-hukuku",
        description: "Muğla ve Marmaris genelinde soruşturma ve kovuşturma süreçlerinde etkin savunma ve hak arama.",
        icon: <Gavel className="text-gold" size={24} />,
    },
    {
        title: "Aile ve Boşanma Hukuku",
        slug: "aile-ve-bosanma-hukuku",
        description: "Boşanma, velayet ve mal paylaşımı süreçlerinde profesyonel ve sonuç odaklı hukuki destek.",
        icon: <Users className="text-gold" size={24} />,
    },
    {
        title: "Gayrimenkul Hukuku",
        slug: "gayrimenkul-hukuku",
        description: "Tapu iptal tescil, kira uyuşmazlıkları ve gayrimenkul satış süreçlerinde hukuki güvenlik.",
        icon: <Landmark className="text-gold" size={24} />,
    },
    {
        title: "Varlık ve Miras Yönetimi",
        slug: "varlik-ve-miras-yonetimi",
        description: "Miras taksimi, vasiyetname hazırlama ve miras hukukundan doğan tüm uyuşmazlıkların çözümü.",
        icon: <Briefcase className="text-gold" size={24} />,
    },
];

export const Services = () => {
    return (
        <section className="py-32 bg-[#0A0A0A]" id="areas">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>

                        <h2 className="text-5xl font-serif font-black text-white">
                            Uzmanlık Alanları
                        </h2>
                    </div>
                    <Link href="/hizmetlerimiz" className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-widest uppercase hover:text-gold transition-colors group">
                        TÜM HİZMETLERİ İNCELEYİN <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {practices.map((practice, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <Link href={`/hizmetlerimiz/${practice.slug}`} className="block h-full group">
                                <div className="bg-[#111111] p-10 rounded-xl border border-white/5 group-hover:border-gold/20 transition-all h-full">
                                    <div className="w-14 h-14 bg-gold/5 rounded flex items-center justify-center mb-10 group-hover:bg-gold/10 transition-colors">
                                        {practice.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-6 group-hover:text-gold transition-colors">
                                        {practice.title}
                                    </h3>
                                    <p className="text-white/40 text-[13px] leading-relaxed font-light">
                                        {practice.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
