import Header from '../components/Header';
import Contact from '../components/Contact';
import MainContent from '../components/MainContent';
import MissionSection from '../components/MissionSection';
import Footer from '../components/Footer';
import '../assets/styles/landing.css'
const LandingPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <MissionSection />
      <Footer />
    </>
  );
};

export default LandingPage;
