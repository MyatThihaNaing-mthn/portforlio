import { motion } from "framer-motion";

export default function NavBar() {

    const logoVariant = {
        hidden: { opacity: 0},
        visible: { opacity: 1, transistion: { duration: 0.2, ease: "easeIn"}}
    }

    return (
        <motion.header
            className="header"
            initial="hidden"
            animate="visible"
        >
            <nav className=" w-full h-10 bg-white flex justify-end">
                <motion.div
                    className="logo"
                    variants={logoVariant}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                        <path
                            fill="none"
                            stroke="white"
                            strokeWidth="4"
                            d="M 50 10 L 80 30 L 80 70 L 50 90 L 20 70 L 20 30 Z"
                        />
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="28"
                            fill="white"
                            fontFamily="Arial"
                        >
                            M
                        </text>
                    </svg>
                </motion.div>
            </nav>

        </motion.header>
    )
}