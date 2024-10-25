import './App.css';
import './components/navbar';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import Marque from './components/marque';
import Features from './components/features';
import Offerings from './components/offerings';
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Marque />
      <Features />
      <Offerings />
    </>
  );
}

export default App;
