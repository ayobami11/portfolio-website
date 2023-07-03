import Link from "next/link"

import styles from '../styles/hamburgerBtn.module.css';

export default function HamburgerMenu() {
    return (
        <nav>
            <ol>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/#experience">Experience</Link>
                </li>
                <li>
                    <Link href="/#work">Work</Link>
                </li>
                <li>
                    <Link href="/#contact">Contact</Link>
                </li>
            </ol>
        </nav>
    )
}