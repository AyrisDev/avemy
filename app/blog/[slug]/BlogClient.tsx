"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";
import directus, { getDirectusImage } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Image from "next/image";

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    content: string;
    seo_description: string;
    date_created: string;
    featured_image: string;
    category?: {
        name: string;
    };
    reading_time?: string;
    author_name?: string;
}

export default function BlogClient({ params, initialPost }: { params: { slug: string }, initialPost: BlogPost | null }) {
    const [post, setPost] = useState<BlogPost | null>(initialPost);
    const [loading, setLoading] = useState(!initialPost);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        if (initialPost) return;

        async function fetchPost() {
            try {
                const response = await directus.request(
                    readItems('posts', {
                        fields: ['id', 'slug', 'title', 'content', 'seo_description', 'date_created', 'featured_image'],
                        filter: {
                            slug: { _eq: params.slug },
                            status: { _eq: 'published' }
                        },
                        limit: 1
                    })
                );

                if (response && response.length > 0) {
                    setPost(response[0] as unknown as BlogPost);
                }
            } catch (error) {
                console.error("Error fetching post details:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [params.slug, initialPost]);

    if (loading) {
        return (
            <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
            </main>
        );
    }

    if (!post) {
        return (
            <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center text-white px-6">
                <h1 className="text-4xl font-serif font-bold mb-6">Yazı Bulunamadı</h1>
                <Link href="/blog" className="text-gold flex items-center gap-2 uppercase tracking-widest font-bold text-sm">
                    <ArrowLeft size={16} /> Bloga Dön
                </Link>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-gold selection:text-void">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gold z-[70] origin-left"
                style={{ scaleX }}
            />

            <Navbar />

            <article className="pt-48 pb-24 container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link href="/blog" className="inline-flex items-center gap-3 text-white/30 hover:text-white transition-colors mb-16 text-[10px] font-bold uppercase tracking-[0.3em]">
                        <ArrowLeft size={16} className="text-gold" /> TÜM YAZILAR
                    </Link>

                    <header className="mb-20">
                        <div className="flex flex-wrap items-center gap-8 mb-10 text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">
                            <span className="text-gold">{post.category?.name || "HUKUK"}</span>
                            <span className="flex items-center gap-2"><Calendar size={14} className="text-gold/40" /> {new Date(post.date_created).toLocaleDateString('tr-TR')}</span>
                            {post.reading_time && (
                                <span className="flex items-center gap-2"><Clock size={14} className="text-gold/40" /> {post.reading_time}</span>
                            )}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-16 leading-tight">
                            {post.title}
                        </h1>

                        <div className="w-full h-[500px] bg-[#111111] rounded-3xl overflow-hidden mb-20 relative border border-white/5">
                            {post.featured_image ? (
                                <Image
                                    src={getDirectusImage(post.featured_image) || ""}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-white/5 font-serif italic text-4xl uppercase tracking-widest">
                                    Prestige Law
                                </div>
                            )}
                        </div>
                    </header>

                    <section className="prose-container">
                        <div
                            className="prose prose-invert prose-stone max-w-none text-white/60 text-lg leading-[1.8] font-light
                            prose-headings:font-serif prose-headings:text-white prose-headings:font-black prose-headings:mt-16 prose-headings:mb-8
                            prose-p:mb-8
                            prose-strong:text-white prose-strong:font-bold
                            prose-blockquote:border-l-gold prose-blockquote:bg-gold/5 prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-white/90 prose-blockquote:font-serif prose-blockquote:text-xl"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </section>

                    <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex gap-4">
                            <Button variant="secondary" className="flex gap-3 px-10 py-5 text-[10px] tracking-[0.2em] uppercase font-bold bg-white/5 border-white/10 hover:bg-gold hover:text-void transition-all">
                                <Share2 size={16} /> PAYLAŞ
                            </Button>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <div className="text-white/60 font-bold text-[10px] tracking-widest uppercase mb-1">YAZAR</div>
                                <div className="text-white text-lg font-serif italic">{post.author_name || "Av. M. Ali Yıldız"}</div>
                            </div>
                        </div>
                    </footer>
                </motion.div>
            </article>

            <FloatingActions />
        </main>
    );
}
