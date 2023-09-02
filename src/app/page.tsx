import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


export default function Home() {


  return (
    <div className='font-primary text-lg bg-cream text-charcoal dark:bg-navy dark:text-slate'>
      <Header />
      <main className='pt-24'>
        <Hero />
        <About />
        <Projects />
        <Contact />

        <p className='text-center p-6'>Design inspired by <a
          href="https://www.brittanychiang.com/"
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-peach dark:hover:text-light-green underline underline-offset-1'
        >Brittany Chiang</a>.</p>
      </main>
    </div>
  )
}
