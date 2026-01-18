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

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    content: string;
    seo_description: string;
    date_created: string;
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
                        fields: ['id', 'slug', 'title', 'content', 'seo_description', 'date_created'],
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

    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: post?.title,
            text: post?.seo_description,
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Error sharing:", err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error("Error copying link:", err);
            }
        }
    };

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

                        <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-10 leading-[1.1] tracking-tight">
                            {post.title}
                        </h1>
                        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-3xl italic">
                            {post.seo_description}
                        </p>

                    </header>

                    <section className="prose-container relative z-10">
                        <div
                            className="prose prose-invert prose-stone max-w-none 
                            text-white/70 text-lg md:text-xl leading-[1.8] font-light
                            prose-headings:text-white prose-headings:font-serif prose-headings:font-black prose-headings:tracking-tight
                            prose-strong:text-white prose-strong:font-bold
                            prose-p:mb-8"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </section>

                    {/* Legal Disclaimer Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 p-8 md:p-10 bg-[#111111] border border-white/5 rounded-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gold/20 group-hover:bg-gold transition-colors" />
                        <div className="flex gap-6 items-start">
                            <div className="text-white/40 leading-relaxed text-sm md:text-base font-light italic">
                                <strong className="text-gold font-bold not-italic block mb-4 uppercase tracking-widest text-xs">Yasal Uyarı</strong>
                                Bu içerik, yayınlandığı tarihteki mevzuat hükümlerine ve Yargıtay kararlarına dayanılarak, yalnızca genel bilgilendirme amacıyla hazırlanmıştır. Burada yer alan bilgiler, hukuki danışmanlık hizmeti yerine geçmez. Her somut olay, kendine özgü detaylar barındırır ve kanunlar zamanla değişebilir. Hak kaybı yaşamamak için hukuki sürecinizi uzman bir avukat eşliğinde yürütmenizi önemle tavsiye ederiz. Detaylı bilgi için büromuzla iletişime geçebilirsiniz.
                            </div>
                        </div>
                    </motion.div>

                    <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex gap-4">
                            <Button
                                onClick={handleShare}
                                variant="secondary"
                                className="flex gap-3 px-10 py-5 text-[10px] tracking-[0.2em] uppercase font-bold bg-white/5 border-white/10 hover:bg-gold hover:text-void transition-all min-w-[200px]"
                            >
                                <Share2 size={16} /> {copied ? "LİNK KOPYALANDI" : "YAZIYI PAYLAŞ"}
                            </Button>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <div className="text-white/60 font-bold text-[10px] tracking-widest uppercase mb-1">YAZAR</div>
                                <div className="text-white text-lg font-serif italic">{post.author_name || "Av. Emina KARABUDAK"}</div>
                            </div>
                        </div>
                    </footer>
                </motion.div>
            </article>

            <FloatingActions />
        </main>
    );
}
