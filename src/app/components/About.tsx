export default function About() {
    return (
        <section id='about' className='max-w-6xl mx-auto my-16 w-11/12'>
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
            <ul className='list-disc list-inside text-base marker:text-peach dark:marker:text-light-green'>
                <li>Next.js</li>
                <li>React</li>
                <li>Tailwind CSS</li>
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