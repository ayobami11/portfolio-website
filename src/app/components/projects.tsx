'use client'
// grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

import { motion } from 'framer-motion';

import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';

const itemVariants = {
    hover: { scale: 1.1 }
}

export default function Projects() {
    return (
        <section id='projects'
        className='max-w-5xl mx-auto '
            >
            <h2>Projects</h2>

            <ul className='grid gap-4'>
                <motion.li
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className='cursor-pointer text-charcoal p-4 rounded-lg dark:bg-dark-blue dark:text-light-gray'
                >
                    <article>
                        <header>
                            <FiFolder className='text-peach text-4xl dark:text-light-green' />
                            <div>
                                <a href="https://tweetteer.netlify.app" target='_blank' rel='noopener noreferrer'>
                                    <FiExternalLink className='dark:text-light-slate' />
                                </a>
                                <a href="https://github.com/ayobami11/twitter-frontend" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FiGithub className='dark:text-light-slate' />
                                </a>
                            </div>
                            <h3 className='text-gray-300 dark:text-light-green'>Tweetteer</h3>
                            <p className='dark:text-light-slate'>
                                A multi-page website showcasing
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto amet magni corporis a unde eum in dignissimos alias enim necessitatibus nulla, tempore atque, iure minus veniam rem. Voluptates, vero id?
                            </p>
                        </header>
                        <footer className='dark:text-slate'>
                            <ul className='flex flex-wrap gap-4'>
                                <li>React.js</li>
                                <li>Material UI</li>
                                <li>MongoDB</li>
                                <li>Styled Components</li>
                                <li>Swiper JS</li>
                            </ul>
                        </footer>
                    </article>
                </motion.li>
                <motion.li
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className='cursor-pointer text-charcoal p-4 rounded-lg dark:bg-dark-blue dark:text-light-gray'
                >
                    <article>
                        <header>
                            <FiFolder className='text-peach text-4xl dark:text-light-green' />
                            <div>
                                <a href="https://todo-app-ayo.vercel.app" target='_blank' rel='noopener noreferrer'>
                                    <FiExternalLink className='dark:text-light-slate' />
                                </a>
                                <a href="https://github.com/ayobami11/todo" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FiGithub className='dark:text-light-slate' />
                                </a>
                            </div>
                            <h3 className='text-gray-300 dark:text-light-green'>Todo</h3>
                            <p className='dark:text-light-slate'>
                                A clone of the popular social media platform, X (formerly, Twitter), pre-Elon.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto amet magni corporis a unde eum in dignissimos alias enim necessitatibus nulla, tempore atque, iure minus veniam rem. Voluptates, vero id?
                            </p>
                        </header>
                        <footer className='dark:text-slate'>
                            <ul className='flex flex-wrap gap-4'>
                                <li>Next.js</li>
                                <li>Tailwind CSS</li>
                                <li>MongoDB</li>
                                <li>Next Auth</li>
                            </ul>
                        </footer>
                    </article>
                </motion.li>
                <motion.li
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className='cursor-pointer text-charcoal p-4 rounded-lg dark:bg-dark-blue dark:text-light-gray'
                >
                    <article>
                        <header>
                            <FiFolder className='text-peach text-4xl dark:text-light-green' />
                            <div>
                                <a href="https://space-tourism-ayo.vercel.app" target='_blank' rel='noopener noreferrer'>
                                    <FiExternalLink className='dark:text-light-slate' />
                                </a>
                                <a href="https://github.com/ayobami11/space-tourism" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FiGithub className='dark:text-light-slate' />
                                </a>
                            </div>
                            <h3 className='text-gray-300 dark:text-light-green'>Space Tourism</h3>
                            <p className='dark:text-light-slate'>
                                A multi-page website showcasing
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto amet magni corporis a unde eum in dignissimos alias enim necessitatibus nulla, tempore atque, iure minus veniam rem. Voluptates, vero id?
                            </p>
                        </header>
                        <footer className='dark:text-slate'>
                            <ul className='flex flex-wrap gap-4'>
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
                    className='cursor-pointer text-charcoal p-4 rounded-lg dark:bg-dark-blue dark:text-light-gray'
                >
                    <article>
                        <header>
                            <FiFolder className='text-peach text-4xl dark:text-light-green' />
                            <div>
                                <a href="https://rock-paper-scissors-ls.netlify.app/" target='_blank' rel='noopener noreferrer'>
                                    <FiExternalLink className='dark:text-light-slate' />
                                </a>
                                <a href="https://github.com/ayobami11/rock-paper-scissors" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FiGithub className='dark:text-light-slate' />
                                </a>
                            </div>
                            <h3 className='text-gray-300 dark:text-light-green'>Rock, Paper, Scissors</h3>
                            <p className='dark:text-light-slate'>
                                A web app implementation of the classic Rock, Paper, Scissors game &mdash; with a twist.
                            </p>
                        </header>
                        <footer className='dark:text-slate'>
                            <ul className='flex flex-wrap gap-4'>
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
                    className='cursor-pointer text-charcoal p-4 rounded-lg dark:bg-dark-blue dark:text-light-gray'
                >
                    <article>
                        <header>
                            <FiFolder className='text-peach text-4xl dark:text-light-green' />
                            <div>
                                <a href="https://where-in-the-world-react.netlify.app/" target='_blank' rel='noopener noreferrer'>
                                    <FiExternalLink className='dark:text-light-slate' />
                                </a>
                                <a href="https://github.com/ayobami11/countries-app" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FiGithub className='dark:text-light-slate' />
                                </a>
                            </div>
                            <h3 className='text-gray-300 dark:text-light-green'>Countries App</h3>
                            <p className='dark:text-light-slate'>A simple web application which allows users to view real-time information about the countries of the world.</p>
                        </header>
                        <footer className='dark:text-slate'>
                            <ul className='flex flex-wrap gap-4'>
                                <li>React.js</li>
                                <li>Styled Components</li>
                            </ul>
                        </footer>
                    </article>
                </motion.li>
                <motion.li
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className='cursor-pointer text-charcoal p-4 rounded-lg dark:bg-dark-blue dark:text-light-gray'
                >
                    <article>
                        <header>
                            <FiFolder className='text-peach text-4xl dark:text-light-green' />
                            <div>
                                <a href="https://ayobami11.github.io/30DaysOfCode/day-17/" target='_blank' rel='noopener noreferrer'>
                                    <FiExternalLink className='dark:text-light-slate' />
                                </a>
                                <a href="https://github.com/ayobami11/30DaysOfCode/tree/main/day-17" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FiGithub className='dark:text-light-slate' />
                                </a>
                            </div>
                            <h3 className='text-gray-300 dark:text-light-green'>Advice Generator App</h3>
                        </header>
                        <footer className='dark:text-slate'>
                            <ul className='flex flex-wrap gap-4'>
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
                            <FiFolder className='text-peach text-4xl dark:text-light-green' />
                            <div>
                                <a href="https://url-shrtener.netlify.app" target='_blank' rel='noopener noreferrer'>
                                    <FiExternalLink className='dark:text-light-slate' />
                                </a>
                                <a href="https://github.com/ayobami11/url-shortener" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FiGithub className='dark:text-light-slate' />
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
                            <FiFolder className='text-peach text-4xl dark:text-light-green' />
                            <div>
                                <a href="https://ayo-calc.netlify.app" target='_blank' rel='noopener noreferrer'>
                                    <FiExternalLink className='dark:text-light-slate' />
                                </a>
                                <a href="https://github.com/ayobami11/calculator" target='_blank' rel='noopener noreferrer' title='Github'>
                                    <FiGithub className='dark:text-light-slate' />
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