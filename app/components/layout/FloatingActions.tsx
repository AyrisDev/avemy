"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export const FloatingActions = () => {
    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
            <motion.a
                href="https://wa.me/905000000000"
                target="_blank"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/40 transition-shadow"
            >
                <MessageCircle size={28} />
            </motion.a>

            <motion.a
                href="tel:+905000000000"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-gold text-void rounded-full flex items-center justify-center shadow-lg hover:shadow-gold/40 transition-shadow"
            >
                <Phone size={28} />
            </motion.a>
        </div>
    );
};
