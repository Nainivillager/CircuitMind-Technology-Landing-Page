import HeroSection from '../components/heroSection';
import Marque from '../components/marque';
// import Features from './components/features';
import Offerings from '../components/offerings';
import CustomerFeedback from '../components/customerFeedback';
function Home() {
  return (
    <>
      <div className="bg-slate-50">
        <HeroSection />
        <Marque />
        {/* <Features /> */}
        <Offerings />

        <CustomerFeedback />
      </div>
    </>
  );
}

export default Home;
