"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import Link from "next/link";
import { ChevronRight, Bookmark, Calendar, User } from "lucide-react";
import Image from "next/image";
import { getDirectusImage } from "@/lib/directus";

interface Article {
    id: string;
    slug: string;
    title: string;
    seo_description: string;
    date_created: string;
    featured_image: string;
    category?: { name: string } | string;
}

export default function MakalelerListClient({ initialArticles }: { initialArticles: Article[] }) {
    const [articles] = useState<Article[]>(initialArticles || []);

    return (
        <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-gold selection:text-void">
            <Navbar />

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            />

            <section className="pt-48 pb-32 container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 text-center"
                >
                    <div className="flex justify-center mb-10">
                        <div className="w-16 h-[1px] bg-gold/50" />
                    </div>
                    <div className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-8">
                        HUKUKİ ANALİZLER & AKADEMİK YAYINLAR
                    </div>
                    <h1 className="text-6xl md:text-9xl font-serif font-black text-white leading-tight mb-12">
                        Makaleler
                    </h1>
                    <p className="text-white/40 text-lg max-w-3xl mx-auto font-light leading-relaxed">
                        Karmaşık hukuk uyuşmazlıklarına dair derinlemesine analizlerimiz ve çözüm odaklı görüşlerimizle sektöre yön veriyoruz.
                    </p>
                </motion.div>

                {/* Articles List - Full Width Row Style */}
                <div className="max-w-6xl mx-auto space-y-12">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${article.slug}`} className="group block">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 p-10 bg-[#111111]/50 backdrop-blur-sm border border-white/5 rounded-3xl hover:border-gold/20 transition-all duration-500">
                                    {/* Date/Info Column */}
                                    <div className="md:col-span-2 flex flex-col justify-center items-start md:items-center text-center space-y-4 border-b md:border-b-0 md:border-r border-white/5 pb-8 md:pb-0">
                                        <div className="text-gold font-serif text-3xl font-black italic">
                                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                        </div>
                                        <div className="text-[9px] text-white/30 font-bold tracking-widest uppercase">
                                            {new Date(article.date_created).toLocaleDateString("tr-TR", { month: 'long', year: 'numeric' })}
                                        </div>
                                        <div className="w-8 h-[1px] bg-white/10 hidden md:block" />
                                        <div className="text-gold flex items-center gap-2">
                                            <Bookmark size={14} />
                                        </div>
                                    </div>

                                    {/* Main Info Column */}
                                    <div className="md:col-span-10 space-y-6">
                                        <div className="flex items-center gap-4 text-gold/60 text-[9px] font-bold tracking-widest uppercase mb-4">
                                            <span>{typeof article.category === 'object' ? article.category.name : (article.category || 'HUKUK ANALİZİ')}</span>
                                        </div>

                                        <h2 className="text-3xl font-serif font-black text-white group-hover:text-gold transition-colors leading-tight">
                                            {article.title}
                                        </h2>

                                        <p className="text-white/40 text-[15px] leading-relaxed font-light line-clamp-2">
                                            {article.seo_description}
                                        </p>

                                        <div className="pt-6 flex items-center justify-between">
                                            <div className="flex items-center gap-6 text-[10px] text-white/30 font-bold tracking-tighter uppercase">
                                                <span className="flex items-center gap-2"><User size={12} className="text-gold" /> PRESTIGE LAW ACADEMY</span>
                                                <span className="flex items-center gap-2"><Calendar size={12} className="text-gold" /> {new Date(article.date_created).toLocaleDateString("tr-TR")}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gold text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                                ANALİZİ OKU <ChevronRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {articles.length === 0 && (
                        <div className="text-center py-40 border border-white/5 rounded-3xl bg-[#111111]/30">
                            <p className="text-white/30 font-light italic">Henüz makale yayınlanmadı.</p>
                        </div>
                    )}
                </div>
            </section>

            <FloatingActions />
        </main>
    );
}
