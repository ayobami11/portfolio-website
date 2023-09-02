import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


export default function Home() {


  return (
    <div className='font-tertiary bg-cream text-charcoal dark:bg-navy dark:text-slate'>
      <Header />
      <main className='pt-24'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
