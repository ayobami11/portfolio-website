import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';

// import { Inter } from 'next/font/google'
import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
