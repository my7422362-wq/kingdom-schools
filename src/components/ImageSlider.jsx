import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/slider.css';

const sliderImages = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80',
];

const ImageSlider = ({ currentSlide, setCurrentSlide }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slider-wrapper">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={sliderImages[currentSlide]}
            alt={`مبنى المدرسة ${currentSlide + 1}`}
            className="slider-image"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: 'easeOut' 
            }}
          />
        </AnimatePresence>
      </div>
      <motion.div 
        className="slider-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      
      <motion.div 
        className="slider-dots"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {sliderImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`الشرائح ${index + 1}`}
            type="button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              backgroundColor: index === currentSlide ? '#f59e0b' : 'rgba(255, 255, 255, 0.6)'
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const useImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return { currentSlide, setCurrentSlide, sliderImages };
};

export default ImageSlider;

