import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Parcels from './components/Parcels';
import Security from './components/Security';
import Privacy from './components/Privacy';
import Drivers from './components/Drivers';
import About from './components/About';
import Faq from './components/Faq';
import Download from './components/Download';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Parcels />
        <Security />
        <Privacy />
        <Drivers />
        <About />
        <Faq />
        <Download />
      </main>
      <Footer />
    </MotionConfig>
  );
}
