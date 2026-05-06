import Hero from './components/Hero';
import Header from './components/Header';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Header />
      <Hero />
    </main>
  );
}
