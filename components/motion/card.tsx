"use client";
import React from "react";
import { motion } from "framer-motion";

const MotionCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            initial={{
                opacity: 0,
                y: 20,
            }}
            transition={{
                delay: 0.1,
            }}
        >
            {children}
        </motion.div>
    );
};

export default MotionCard;
