import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSchool from './components/AboutSchool';
import AboutSchoolPage from './components/AboutSchoolPage';
import WhyChooseUs from './components/WhyChooseUs';
import EducationalPrograms from './components/EducationalPrograms';
import ImageVideoSection from './components/ImageVideoSection';
import AcademicCalendar from './components/AcademicCalendar';
import ScrollToTop from './components/ScrollToTop';
import MediaSection from './components/MediaSection';
import EducationalTeam from './components/EducationalTeam';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import RegistrationPage from './components/RegistrationPage';
import './styles/global.css';

function App() {
  const [showAboutPage, setShowAboutPage] = useState(false);

  useEffect(() => {
    if (showAboutPage) {
      window.scrollTo(0, 0);
    }
  }, [showAboutPage]);

  const handleShowMore = () => {
    setShowAboutPage(true);
  };

  const handleGoBack = () => {
    setShowAboutPage(false);
    setTimeout(() => {
      const element = document.getElementById('about-school');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route 
            path="/" 
            element={
              <motion.div
                key="home"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Hero />
                <AboutSchool />
                <WhyChooseUs />
                <EducationalPrograms />
                <ImageVideoSection />
                <EducationalTeam />
                <MediaSection />
                <NewsSection />
                <Footer />
              </motion.div>
            } 
          />
          <Route 
            path="/about" 
            element={
              <motion.div
                key="about"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AboutSchoolPage onGoBack={handleGoBack} />
              </motion.div>
            } 
          />
          <Route 
            path="/academic-calendar" 
            element={
              <motion.div
                key="calendar"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AcademicCalendar />
              </motion.div>
            } 
          />
          <Route 
            path="/registration" 
            element={
              <motion.div
                key="registration"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <RegistrationPage />
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

