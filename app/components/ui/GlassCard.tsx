"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverEffect ? { y: -10, scale: 1.02 } : {}}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
            }}
            className={cn(
                "glass p-6 rounded-lg",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
