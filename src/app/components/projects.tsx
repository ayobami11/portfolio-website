'use client'

import { motion } from 'framer-motion';

import { FiFolder } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa6';
import { LuExternalLink } from 'react-icons/lu';

import styles from '@/app/styles/projects.module.css';

const itemVariants = {
    hover: { scale: 1.1 }
}

export default function Projects() {
    return (
        <section id='projects' className={styles.projectsSection}>
            <h2>Projects</h2>

            <ul className={styles.projects}>
                <motion.li
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={styles.project}
                >
                    <article className={styles.article}>
                        <header>
                            <FiFolder className={styles.folderIcon} />
                            <div className={styles.links}>
                                <a href="https://space-tourism-ayo.vercel.app" target='_blank' rel='noopener noreferrer'>
                                    <LuExternalLink />
                                </a>
                                <a href="https://github.com/ayobami11/space-tourism" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FaGithub />
                                </a>
                            </div>
                            <h3 className={styles.title}>Space Tourism</h3>
                            <p>
                                A multi-page website showcasing
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto amet magni corporis a unde eum in dignissimos alias enim necessitatibus nulla, tempore atque, iure minus veniam rem. Voluptates, vero id?
                            </p>
                        </header>
                        <footer>
                            <ul className={styles.tools}>
                                <li>Next.js</li>
                                <li>CSS Modules</li>
                                <li>Swiper JS</li>
                            </ul>
                        </footer>
                    </article>
                </motion.li>
                <motion.li
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={styles.project}
                >
                    <article className={styles.article}>
                        <header>
                            <FiFolder className={styles.folderIcon} />
                            <div className={styles.links}>
                                <a href="https://rock-paper-scissors-ls.netlify.app/" target='_blank' rel='noopener noreferrer'>
                                    <LuExternalLink />
                                </a>
                                <a href="https://github.com/ayobami11/rock-paper-scissors" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FaGithub />
                                </a>
                            </div>
                            <h3 className={styles.title}>Rock, Paper, Scissors</h3>
                            <p>
                                A web app implementation of the classic Rock, Paper, Scissors game &mdash; with a twist.
                            </p>
                        </header>
                        <footer>
                            <ul className={styles.tools}>
                                <li>React.js</li>
                                <li>Styled Components</li>
                                <li>Framer Motion</li>
                            </ul>
                        </footer>
                    </article>
                </motion.li>
                <motion.li
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={styles.project}
                >
                    <article className={styles.article}>
                        <header>
                            <FiFolder className={styles.folderIcon} />
                            <div className={styles.links}>
                                <a href="https://where-in-the-world-react.netlify.app/" target='_blank' rel='noopener noreferrer'>
                                    <LuExternalLink />
                                </a>
                                <a href="https://github.com/ayobami11/countries-app" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FaGithub />
                                </a>
                            </div>
                            <h3 className={styles.title}>Countries App</h3>
                            <p>A simple web application which allows users to view real-time information about the countries of the world.</p>
                        </header>
                        <footer>
                            <ul className={styles.tools}>
                                <li>React.js</li>
                                <li>Styled Components</li>
                            </ul>
                        </footer>
                    </article>
                </motion.li>
                <motion.li
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={styles.project}
                >
                    <article className={styles.article}>
                        <header>
                            <FiFolder className={styles.folderIcon} />
                            <div className={styles.links}>
                                <a href="https://ayobami11.github.io/30DaysOfCode/day-17/" target='_blank' rel='noopener noreferrer'>
                                    <LuExternalLink />
                                </a>
                                <a href="https://github.com/ayobami11/30DaysOfCode/tree/main/day-17" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FaGithub />
                                </a>
                            </div>
                            <h3 className={styles.title}>Advice Generator App</h3>
                        </header>
                        <footer>
                            <ul className={styles.tools}>
                                <li>
                                    <abbr title="Hyper Text Markup Language">HTML</abbr>
                                </li>
                                <li>
                                    <abbr title="Cascading Style Sheets">CSS</abbr>
                                </li>
                                <li>JavaScript</li>
                            </ul>
                        </footer>
                    </article>
                </motion.li>
                <motion.li>
                    <article>
                        <header>
                            <FiFolder className={styles.folderIcon} />
                            <div className={styles.links}>
                                <a href="https://url-shrtener.netlify.app" target='_blank' rel='noopener noreferrer'>
                                    <LuExternalLink />
                                </a>
                                <a href="https://github.com/ayobami11/url-shortener" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FaGithub />
                                </a>
                            </div>
                            <h3>
                                <abbr title='Uniform Resource Locator'>URL</abbr> Shortener
                            </h3>
                        </header>
                    </article>
                </motion.li>
                <motion.li>
                    <article>
                        <header>
                            <FiFolder className={styles.folderIcon} />
                            <div className={styles.links}>
                                <a href="https://ayo-calc.netlify.app" target='_blank' rel='noopener noreferrer'>
                                    <LuExternalLink />
                                </a>
                                <a href="https://github.com/ayobami11/calculator" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FaGithub />
                                </a>
                            </div>
                            <h3>Simple Calculator</h3>
                        </header>
                    </article>
                </motion.li>
            </ul>
        </section>
    )
}