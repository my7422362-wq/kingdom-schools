import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageSlider, { useImageSlider } from './ImageSlider';
import RegistrationModal from './RegistrationModal';
import '../styles/hero.css';

const Hero = () => {
  const { currentSlide, setCurrentSlide, sliderImages } = useImageSlider();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="hero" id="home">
      {/* Registration Section Anchor */}
      <div id="registration" className="registration-anchor"></div>
      {/* Background Image Slider */}
      <ImageSlider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

      <div className="hero-content">
        <motion.div 
          className="hero-text-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            نصنع قادة المستقبل بتعليم متميز
          </motion.h1>

          <motion.p 
            className="hero-paragraph"
            variants={itemVariants}
          >
            في مدارس المملكة بالرياض، نوفر رحلة تعليمية متكاملة تلهم التعلم والإبداع وتنمي الشخصية في بيئة آمنة تقوم على الاحترام.
          </motion.p>

          <motion.button
            type="button"
            className="hero-button"
            onClick={openModal}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#d97706',
              boxShadow: '0 8px 30px rgba(245, 158, 11, 0.6)',
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            التسجيل
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;

