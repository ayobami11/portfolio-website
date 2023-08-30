import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


export default function Home() {


  return (
    <div className='font-primary bg-cream text-charcoal dark:bg-navy dark:text-slate'>
      <Header />
      <main className='pt-24'>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
