import { FaGithub } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';

import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
    return (
        <section id='contact' className='text-center w-10/12 max-w-2xl mx-auto pt-10 pb-20'>
            <h2 className='mb-8'>Contact</h2>

            <p className='mb-12 text-lg/relaxed'>
                Let&rsquo;s chat! I&rsquo;m excited to hear from you and discuss potential collaborations.
                Don&rsquo;t hesitate to reach out &ndash; I&rsquo;m only one message away.
            </p>

            <a
                href="mailto:tunwaseayobami98@gmail.com"
                target='_blank'
                rel='noopener noreferrer'
                className='bg-transparent rounded border-2 border-current text-peach inline-block mb-20 py-3 px-6 transition outline-none hover:shadow-btn-hover hover:-translate-x-1 hover:-translate-y-1 dark:text-light-green'
            >Say Hello</a>

            <address>
                <p className='mb-10 text-lg/relaxed'>Feel free to connect with me on the following platforms too:</p>
                <div className='flex justify-center gap-9'>
                    <a href="https://github.com/ayobami11" target='_blank' rel='noopener noreferrer' title="Github">
                        <FiGithub className='text-3xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                    </a>
                    <a href="https://twitter.com/TunwaseAyobami" target='_blank' rel='noopener noreferrer' title="Twitter">
                        <FiTwitter className='text-3xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                    </a>
                    <a href="https://linkedin.com/in/ayobami-tunwase-83a21b202" target='_blank' rel='noopener noreferrer' title="Linkedin">
                        <FiLinkedin className='text-3xl text-zinc-600 hover:text-peach dark:text-light-slate hover:dark:text-light-green transition-colors duration-300 ease-btn-hover' />
                    </a>
                </div>
            </address>
        </section>
    )
}