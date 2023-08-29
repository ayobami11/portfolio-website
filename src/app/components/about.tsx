export default function About() {
    return (
        <section id='about'>

            <header>
                <span className='dark:text-light-green'>Hello, I&apos;m</span>
                <h1 className='text-grayish-blue text-[clamp(2.25rem,4vw,4rem)] dark:text-lightest-slate'>Ayobami Tunwase.</h1>
            </header>

            <h2 className='text-light-gray dark:text-inherit'>Frontend web developer</h2>

            <p>
                Passionate about creating aesthetically-pleasing and user-friendly website.
                I specialize in transforming pixel-perfect designs into fully-flegded, responsive web interfaces that are accessible and easy to scale.
                With a keen eye for detail, I endeavour to create websites which are not only interactive but perform efficiently across various devices and browsers.
            </p>
            <p>
                Driven by my zeal for web development, I continuously seek for ways to expand my skill set and stay up-to-date with the lastest industry trends and
                best practices. Some of the technologies I have experience using include:
            </p>
            <ul>
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>JavaScript</li>

                <li>
                    <abbr title="Hyper Text Markup Language">HTML</abbr>
                </li>
                <li>
                    <abbr title="Cascading Style Sheets">CSS</abbr>
                </li>
                <li>Git</li>
            </ul>
        </section>
    )
}