import HeroSection from '../components/heroSection';
import Marque from '../components/marque';
// import Features from './components/features';
import Offerings from '../components/offerings';
import CustomerFeedback from '../components/customerFeedback';
import Galllery from '../components/galllery';
import { styles } from '@/components/styles';
function Home() {
  return (
    <>
      <div style={styles.wholeAppBg}>
        <HeroSection />
        <Marque />
        {/* <Features /> */}
        <Offerings />
        <CustomerFeedback />
        <Galllery />
      </div>
    </>
  );
}

export default Home;
