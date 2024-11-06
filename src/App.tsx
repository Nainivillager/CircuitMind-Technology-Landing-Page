import './App.css';
import './components/navbar';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import Marque from './components/marque';
// import Features from './components/features';
import Offerings from './components/offerings';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="bg-slate-50">
        <Navbar />
        <HeroSection />
        <Marque />
        {/* <Features /> */}
        <Offerings />
        <Footer />
      </div>
    </>
  );
}

export default App;
