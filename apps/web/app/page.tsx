import Hero from './components/Hero';
import InteractiveWorkspace from './components/InteractiveWorkspace';
import Header from './components/Header';
import ScrollMarquee from './components/ScrollMarquee';
import AboutSection from './components/AboutSection';
import FeaturesGrid from './components/FeaturesGrid';
import SystemSection from './components/SystemSection';
import AIFeaturesSection from './components/AIFeaturesSection';
import PricingSection from './components/PricingSection';
import ComparisonSection from './components/ComparisonSection';
import JoinCohortSection from './components/JoinCohortSection';

export default function Page() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white">
      <Header />
      <Hero />
      <ScrollMarquee />
      <AboutSection />
      <FeaturesGrid />
      <SystemSection />
      <AIFeaturesSection />
      <PricingSection />
      <InteractiveWorkspace />
      <ComparisonSection />
      <JoinCohortSection />
    </main>
  );
}
