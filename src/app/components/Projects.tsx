'use client'

import { motion } from 'framer-motion';

import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
    return (
        <section id='projects'
            className='max-w-6xl mx-auto mb-24 w-11/12'
        >
            <h2 className='mb-8'>Projects</h2>

            <ul className='grid gap-4 auto-rows-fr md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
                <li
                    className='group relative border-2 border-dotted hover:border-dashed border-peach dark:border-0 dark:shadow-md dark:bg-light-navy cursor-pointer text-charcoal py-8 px-6 rounded dark:bg-dark-blue dark:text-light-gray transition duration-300 ease-btn-hover hover:-translate-y-1'
                >
                    <article className='flex flex-col justify-between h-full'>
                        <header>
                            <div className='flex gap-4 justify-between items-center mb-6'>
                                <FiFolder className='text-peach text-4xl dark:text-light-green' />
                                <div className='flex gap-4 relative z-10'>
                                    <a
                                        href="https://tweetteer.netlify.app"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Live Site'
                                    >
                                        <FiExternalLink className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                    <a
                                        href="https://github.com/ayobami11/twitter-frontend"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Github'
                                    >
                                        <FiGithub className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                </div>
                            </div>
                            <h3 className='mb-4 group-hover:text-peach group-hover:dark:text-light-green'>
                                <a
                                    href="https://tweetteer.netlify.app"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='before:absolute before:content-[""] before:inset-0'
                                >
                                    Tweetteer
                                </a>
                            </h3>
                            <p className='dark:text-light-slate mb-7 leading-relaxed'>
                                A clone of the popular social media platform, X (formerly, Twitter), pre-Elon, built using
                                the <abbr title='MongoDB Express React Node'>MERN</abbr> stack.
                            </p>
                        </header>
                        <footer className='font-tertiary text-sm text-zinc-400 dark:text-slate'>
                            <ul className='flex flex-wrap gap-x-3 gap-y-1'>
                                <li>React.js</li>
                                <li>Express</li>
                                <li>Material UI</li>
                                <li>MongoDB</li>
                                <li>Styled Components</li>
                            </ul>
                        </footer>
                    </article>
                </li>
                <li
                    className='group relative border-2 border-dotted hover:border-dashed border-peach dark:border-0 dark:shadow-md dark:bg-light-navy cursor-pointer text-charcoal py-8 px-6 rounded dark:bg-dark-blue dark:text-light-gray transition duration-300 ease-btn-hover hover:-translate-y-1'
                >
                    <article className='flex flex-col justify-between h-full'>
                        <header>
                            <div className='flex gap-4 justify-between items-center mb-6'>
                                <FiFolder className='text-peach text-4xl dark:text-light-green' />
                                <div className='flex gap-4 relative z-10'>
                                    <a
                                        href="https://todo-app-ayo.vercel.app"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Live Site'
                                    >
                                        <FiExternalLink className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                    <a
                                        href="https://github.com/ayobami11/todo"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Github'
                                    >
                                        <FiGithub className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                </div>
                            </div>
                            <h3 className='mb-4 group-hover:text-peach group-hover:dark:text-light-green'>
                                <a
                                    href="https://todo-app-ayo.vercel.app"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='before:absolute before:content-[""] before:inset-0'
                                >
                                    Todo
                                </a>
                            </h3>
                            <p className='dark:text-light-slate mb-7 leading-relaxed'>
                                A full-stack application which allows users to create and modify tasks.
                                Users can also filter tasks and select their preferred color theme.
                            </p>
                        </header>
                        <footer className='font-tertiary text-sm text-zinc-400 dark:text-slate'>
                            <ul className='flex flex-wrap gap-x-3 gap-y-1'>
                                <li>Next.js</li>
                                <li>Tailwind CSS</li>
                                <li>MongoDB</li>
                                <li>Next Auth</li>
                            </ul>
                        </footer>
                    </article>
                </li>
                <li
                    className='group relative border-2 border-dotted hover:border-dashed border-peach dark:border-0 dark:shadow-md dark:bg-light-navy cursor-pointer text-charcoal py-8 px-6 rounded dark:bg-dark-blue dark:text-light-gray transition duration-300 ease-btn-hover hover:-translate-y-1'
                >
                    <article className='flex flex-col justify-between h-full'>
                        <header>
                            <div className='flex gap-4 justify-between items-center mb-6'>
                                <FiFolder className='text-peach text-4xl dark:text-light-green' />
                                <div className='flex gap-4 relative z-10'>
                                    <a
                                        href="https://space-tourism-ayo.vercel.app"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Live Site'
                                    >
                                        <FiExternalLink className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                    <a
                                        href="https://github.com/ayobami11/space-tourism"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Github'
                                    >
                                        <FiGithub className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                </div>
                            </div>
                            <h3 className='mb-4 group-hover:text-peach group-hover:dark:text-light-green'>
                                <a
                                    href="https://space-tourism-ayo.vercel.app"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='before:absolute before:content-[""] before:inset-0'
                                >
                                    Space Tourism
                                </a>
                            </h3>
                            <p className='dark:text-light-slate mb-7 leading-relaxed'>
                                A multi-page website showcasing basic information about a space travel agency.
                            </p>
                        </header>
                        <footer className='font-tertiary text-sm text-zinc-400 dark:text-slate'>
                            <ul className='flex flex-wrap gap-x-3 gap-y-1'>
                                <li>Next.js</li>
                                <li>CSS Modules</li>
                                <li>Swiper JS</li>
                            </ul>
                        </footer>
                    </article>
                </li>
                <li
                    className='group relative border-2 border-dotted hover:border-dashed border-peach dark:border-0 dark:shadow-md dark:bg-light-navy cursor-pointer text-charcoal py-8 px-6 rounded dark:bg-dark-blue dark:text-light-gray transition duration-300 ease-btn-hover hover:-translate-y-1'
                >
                    <article className='flex flex-col justify-between h-full'>
                        <header>
                            <div className='flex gap-4 justify-between items-center mb-6'>
                                <FiFolder className='text-peach text-4xl dark:text-light-green' />
                                <div className='flex gap-4 relative z-10'>
                                    <a
                                        href="https://rock-paper-scissors-ls.netlify.app/"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Live Site'
                                    >
                                        <FiExternalLink className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                    <a
                                        href="https://github.com/ayobami11/rock-paper-scissors"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Github'
                                    >
                                        <FiGithub className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                </div>
                            </div>
                            <h3 className='mb-4 group-hover:text-peach group-hover:dark:text-light-green'>
                                <a
                                    href="https://rock-paper-scissors-ls.netlify.app/"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='before:absolute before:content-[""] before:inset-0'
                                >
                                    Rock, Paper, Scissors
                                </a>
                            </h3>
                            <p className='dark:text-light-slate mb-7 leading-relaxed'>
                                A web app implementation of the classic Rock, Paper, Scissors game &mdash; with a twist.
                            </p>
                        </header>
                        <footer className='font-tertiary text-sm text-zinc-400 dark:text-slate'>
                            <ul className='flex flex-wrap gap-x-3 gap-y-1'>
                                <li>React.js</li>
                                <li>Styled Components</li>
                                <li>Framer Motion</li>
                            </ul>
                        </footer>
                    </article>
                </li>
                <li
                    className='group relative border-2 border-dotted hover:border-dashed border-peach dark:border-0 dark:shadow-md dark:bg-light-navy cursor-pointer text-charcoal py-8 px-6 rounded dark:bg-dark-blue dark:text-light-gray transition duration-300 ease-btn-hover hover:-translate-y-1'
                >
                    <article className='flex flex-col justify-between h-full'>
                        <header>
                            <div className='flex gap-4 justify-between items-center mb-6'>
                                <FiFolder className='text-peach text-4xl dark:text-light-green' />
                                <div className='flex gap-4 relative z-10'>
                                    <a
                                        href="https://where-in-the-world-react.netlify.app/"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Live Site'
                                    >
                                        <FiExternalLink className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                    <a
                                        href="https://github.com/ayobami11/countries-app"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Github'
                                    >
                                        <FiGithub className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                </div>
                            </div>
                            <h3 className='mb-4 group-hover:text-peach group-hover:dark:text-light-green'>
                                <a
                                    href="https://where-in-the-world-react.netlify.app/"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='before:absolute before:content-[""] before:inset-0'
                                >
                                    Where In The World?
                                </a>
                            </h3>
                            <p className='dark:text-light-slate mb-7 leading-relaxed'>
                                A simple web application which displays real-time information about the countries of the world.
                            </p>
                        </header>
                        <footer className='font-tertiary text-sm text-zinc-400 dark:text-slate'>
                            <ul className='flex flex-wrap gap-x-3 gap-y-1'>
                                <li>React.js</li>
                                <li>Styled Components</li>
                            </ul>
                        </footer>
                    </article>
                </li>
                <li
                    className='group relative border-2 border-dotted hover:border-dashed border-peach dark:border-0 dark:shadow-md dark:bg-light-navy cursor-pointer text-charcoal py-8 px-6 rounded dark:bg-dark-blue dark:text-light-gray transition duration-300 ease-btn-hover hover:-translate-y-1'
                >
                    <article className='flex flex-col justify-between h-full'>
                        <header>
                            <div className='flex gap-4 justify-between items-center mb-6'>
                                <FiFolder className='text-peach text-4xl dark:text-light-green' />
                                <div className='flex gap-4 relative z-10'>
                                    <a
                                        href="https://ayobami11.github.io/30DaysOfCode/day-17/"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Live Site'
                                    >
                                        <FiExternalLink className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                    <a
                                        href="https://github.com/ayobami11/30DaysOfCode/tree/main/day-17"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Github'
                                    >
                                        <FiGithub className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                </div>
                            </div>
                            <h3 className='mb-4 group-hover:text-peach group-hover:dark:text-light-green'>
                                <a
                                    href="https://ayobami11.github.io/30DaysOfCode/day-17/"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='before:absolute before:content-[""] before:inset-0'
                                >
                                    Advice Generator
                                </a>
                            </h3>
                            <p className='dark:text-light-slate mb-7 leading-relaxed'>
                                A single-page website that autogenerates random advice with the Advice
                                Slip <abbr title='Application Programming Interface'>API</abbr>.
                            </p>
                        </header>
                        <footer className='font-tertiary text-sm text-zinc-400 dark:text-slate'>
                            <ul className='flex flex-wrap gap-x-3 gap-y-1'>
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
                </li>
                <li
                    className='group relative border-2 border-dotted hover:border-dashed border-peach dark:border-0 dark:shadow-md dark:bg-light-navy cursor-pointer text-charcoal py-8 px-6 rounded dark:bg-dark-blue dark:text-light-gray transition duration-300 ease-btn-hover hover:-translate-y-1'
                >
                    <article className='flex flex-col justify-between h-full'>
                        <header>
                            <div className='flex gap-4 justify-between items-center mb-6'>
                                <FiFolder className='text-peach text-4xl dark:text-light-green' />
                                <div className='flex gap-4 relative z-10'>
                                    <a
                                        href="https://url-shrtener.netlify.app"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Live Site'
                                        >
                                        <FiExternalLink className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                    <a
                                        href="https://github.com/ayobami11/url-shortener"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Github'
                                    >
                                        <FiGithub className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                </div>
                            </div>
                            <h3 className='mb-4 group-hover:text-peach group-hover:dark:text-light-green'>
                                <a
                                    href="https://url-shrtener.netlify.app"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='before:absolute before:content-[""] before:inset-0'
                                >
                                    <abbr title='Uniform Resource Locator'>URL</abbr> Shortener
                                </a>
                            </h3>
                            <p className='dark:text-light-slate mb-7 leading-relaxed'>
                                Online tool that accepts long website <abbr title='Uniform Resource Locator'>URL</abbr>s
                                and generates shortened links that are shareable and easy to remember.
                            </p>
                        </header>
                        <footer className='font-tertiary text-sm text-zinc-400 dark:text-slate'>
                            <ul className='flex flex-wrap gap-x-3 gap-y-1'>
                                <li>React.js</li>
                                <li>Styled Components</li>
                                <li>Shortly <abbr title='Application Programming Interface'>API</abbr></li>
                            </ul>
                        </footer>
                    </article>
                </li>
                <li
                    className='group relative border-2 border-dotted hover:border-dashed border-peach dark:border-0 dark:shadow-md dark:bg-light-navy cursor-pointer text-charcoal py-8 px-6 rounded dark:bg-dark-blue dark:text-light-gray transition duration-300 ease-btn-hover hover:-translate-y-1'
                >
                    <article className='flex flex-col justify-between h-full'>
                        <header>
                            <div className='flex gap-4 justify-between items-center mb-6'>
                                <FiFolder className='text-peach text-4xl dark:text-light-green' />
                                <div className='flex gap-4 relative z-10'>
                                    <a
                                        href="https://ayo-calc.netlify.app"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Live Site'
                                    >
                                        <FiExternalLink className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                    <a
                                        href="https://github.com/ayobami11/calculator"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        title='Github'
                                    >
                                        <FiGithub className='text-2xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                                    </a>
                                </div>
                            </div>
                            <h3 className='mb-4 group-hover:text-peach group-hover:dark:text-light-green'>
                                <a
                                    href="https://ayo-calc.netlify.app"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='before:absolute before:content-[""] before:inset-0'
                                >
                                    Calculator
                                </a>
                            </h3>
                            <p className='dark:text-light-slate mb-7 leading-relaxed'>
                                A simple calculator that performs basic arithmetic operations.
                            </p>
                        </header>
                        <footer className='font-tertiary text-sm text-zinc-400 dark:text-slate'>
                            <ul className='flex flex-wrap gap-x-3 gap-y-1'>
                                <li>React.js</li>
                                <li>Styled Components</li>
                            </ul>
                        </footer>
                    </article>
                </li>
            </ul>
        </section >
    )
}