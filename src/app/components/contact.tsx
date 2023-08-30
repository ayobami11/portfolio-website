import { FaGithub } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';

export default function Contact() {
    return (
        <section id='contact' className='text-center'>
            <h2>Contact</h2>

            <p>
                Let&rsquo;s chat! I&rsquo;m excited to hear from you and discuss potential collaborations.
                Don&rsquo;t hesitate to reach out &ndash; I&rsquo;m only one message away.
            </p>

            <a
                href="mailto:tunwaseayobami98@gmail.com"
                target='_blank'
                rel='noopener noreferrer'
                className='bg-transparent rounded border-2 border-current text-peach inline-block p-4 transition outline-none hover:shadow-btn-hover hover:-translate-x-1 hover:-translate-y-1 dark:text-light-green'
            >Say Hello</a>

            <address>
                <p>You can connect with me on the following platforms. Feel free to follow and message me there too:</p>

                <a href="https://github.com/ayobami11" target='_blank' rel='noopener noreferrer' title="Github">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/TunwaseAyobami" target='_blank' rel='noopener noreferrer' title="Twitter">
                    <FaTwitter />
                </a>
                <a href="https://linkedin.com/in/ayobami-tunwase-83a21b202" target='_blank' rel='noopener noreferrer' title="Linkedin">
                    <FaLinkedin />
                </a>
            </address>
        </section>
    )
}