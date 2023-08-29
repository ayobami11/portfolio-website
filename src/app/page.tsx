import Header from '@/app/components/Header';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';


export default function Home() {


  return (
    <div className='font-inter bg-cream text-charcoal dark:bg-navy dark:text-slate'>
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
