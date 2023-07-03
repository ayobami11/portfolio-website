import styles from '../styles/projects.module.css';

export default function Projects() {
    return (
        <section id='projects'>
            <h2>Projects</h2>

            <ul>
                <li>
                    <a href="https://rock-paper-scissors-ls.netlify.app/" target='_blank' rel='noopener noreferrer'></a>
                    <a href="https://github.com/ayobami11/rock-paper-scissors" target='_blank' rel='noopener noreferrer' title='Github'></a>
                </li>
                <li>
                    <a href="https://where-in-the-world-react.netlify.app/" target='_blank' rel='noopener noreferrer'></a>
                    <a href="https://github.com/ayobami11/countries-app" target='_blank' rel='noopener noreferrer' title='Github'></a>
                </li>
                <li>
                    <a href="https://ayobami11.github.io/30DaysOfCode/day-17/" target='_blank' rel='noopener noreferrer'></a>
                    <a href="https://github.com/ayobami11/30DaysOfCode/tree/main/day-17" target='_blank' rel='noopener noreferrer' title='Github'></a>
                </li>
            </ul>
        </section>
    )
}