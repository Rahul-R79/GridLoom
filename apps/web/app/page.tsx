import Hero from './components/Hero';
import Header from './components/Header';
import ScrollMarquee from './components/ScrollMarquee';
import AboutSection from './components/AboutSection';

export default function Page() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-hidden bg-white">
      <Header />
      <Hero />
      <ScrollMarquee />
      <AboutSection />
    </main>
  );
}
