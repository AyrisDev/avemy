"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import directus, { getDirectusImage } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Image from "next/image";

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    seo_description: string;
    date_created: string;
    featured_image: string;
    category?: {
        name: string;
    };
    reading_time?: string;
}

export default function BlogListClient({ initialPosts }: { initialPosts: BlogPost[] }) {
    const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
    const [loading, setLoading] = useState(!initialPosts);

    useEffect(() => {
        if (initialPosts) return;

        async function fetchPosts() {
            try {
                const response = await directus.request(
                    readItems('posts', {
                        fields: ['id', 'slug', 'title', 'seo_description', 'date_created', 'featured_image'],
                        sort: ['-date_created'],
                        filter: {
                            status: { _eq: 'published' }
                        }
                    })
                );
                setPosts(response as unknown as BlogPost[]);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [initialPosts]);

    return (
        <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-gold selection:text-void">
            <Navbar />

            <section className="pt-48 pb-20 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <div className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
                        BİLGİ MERKEZİ
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-8">
                        Hukuk <span className="text-gold">Rehberi</span>
                    </h1>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Hukuki gelişmeleri, güncel makaleleri ve stratejik analizlerimizi uzman bakış açısıyla takip edin.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all group flex flex-col h-full">
                                        {/* Image Header */}
                                        <div className="relative aspect-video overflow-hidden">
                                            {post.featured_image ? (
                                                <Image
                                                    src={getDirectusImage(post.featured_image) || ""}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center font-serif italic text-white/5 text-2xl uppercase tracking-widest">
                                                    PRESTIGE
                                                </div>
                                            )}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-void/80 backdrop-blur-md text-gold text-[9px] font-bold uppercase tracking-[0.2em] rounded border border-white/5">
                                                    {post.category?.name || "Hukuk"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <h2 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                                                {post.title}
                                            </h2>

                                            <p className="text-white/40 text-sm leading-relaxed mb-10 font-light flex-grow line-clamp-3">
                                                {post.seo_description || "Makale detayı için tıklayın..."}
                                            </p>

                                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                                <div className="flex gap-6 text-white/20 text-[10px] font-bold tracking-widest uppercase">
                                                    <span className="flex items-center gap-2">
                                                        <Calendar size={14} className="text-gold/40" />
                                                        {new Date(post.date_created).toLocaleDateString('tr-TR')}
                                                    </span>
                                                    {post.reading_time && (
                                                        <span className="flex items-center gap-2">
                                                            <Clock size={14} className="text-gold/40" />
                                                            {post.reading_time}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                                                    <ArrowRight className="text-white/40 group-hover:text-void transition-colors" size={18} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </section>

            <FloatingActions />
        </main>
    );
}
