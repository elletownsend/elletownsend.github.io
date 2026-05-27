import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Contact from '@/components/Contact/Contact';
import ScrollNav from '@/components/ScrollNav/ScrollNav';

export default function Home() {
  return (
    <main>
      <ScrollNav />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
