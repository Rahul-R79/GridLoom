import Hero from './components/Hero';
import Header from './components/Header';
import ScrollMarquee from './components/ScrollMarquee';

export default function Page() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-hidden bg-white">
      <Header />
      <Hero />
      <ScrollMarquee />
    </main>
  );
}
