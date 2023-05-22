import React from 'react'
import { motion } from 'framer-motion';

const Canvas = () => {
    return (
        <>
            <div></div>
            <motion.div
                whileInView={{ right: '11rem' }}
            animate={{
                x: 0,
                backgroundColor: "#000",
                boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                position: "fixed",
                transitionEnd: {
                    display: "none",
                },
            }}
            />

        </>
    )
}

export default Canvas