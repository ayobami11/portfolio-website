'use client'

import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
}

const listVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        x: 20
    },
    visible: {
        opacity: 1,
        x: 0
    }
}

export default function About() {
    return (
        <motion.section
            id='about'
            variants={sectionVariants}
            initial='hidden'
            whileInView='visible'
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className='max-w-6xl mx-auto mb-24 w-11/12'>
            <h2 className='mb-10'>About</h2>
            <p className='mb-4'>
                I&apos;m a frontend web developer based in Lagos, Nigeria.
                I specialize in transforming pixel-perfect designs into fully-flegded, responsive web interfaces that are accessible and easy to scale.
                With a keen eye for detail, I endeavour to create websites which are not only interactive but perform efficiently across various devices and browsers.
            </p>
            <p className='mb-4'>
                Driven by my zeal for web development, I continuously seek for ways to expand my skill set and stay up-to-date with the lastest industry trends and
                best practices. Some of the technologies I have experience using include:
            </p>
            <motion.ul
                variants={listVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='list-disc list-inside text-base marker:text-peach dark:marker:text-light-green'
            >
                <motion.li variants={itemVariants}>Next.js</motion.li>
                <motion.li variants={itemVariants}>React</motion.li>
                <motion.li variants={itemVariants}>Tailwind CSS</motion.li>
                <motion.li variants={itemVariants}>TypeScript</motion.li>
                <motion.li variants={itemVariants}>JavaScript</motion.li>
                <motion.li variants={itemVariants}>
                    <abbr title="Hyper Text Markup Language">HTML</abbr>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <abbr title="Cascading Style Sheets">CSS</abbr>
                </motion.li>
                <motion.li variants={itemVariants}>Git</motion.li>
            </motion.ul>
        </motion.section>
    )
}