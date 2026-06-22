import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/MediaSection.css';

const galleryImages = [
  {
    id: 1,
    src: '/student.webp',
    alt: 'طلاب في الفصل الدراسي'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    alt: 'طفل يقرأ كتاباً'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
    alt: 'طلاب يدرسون معاً'
  },
  {
    id: 4,
    src: '/teatcher.webp',
    alt: 'معلم في الفصل'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&q=80',
    alt: 'طلاب في الملعب'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    alt: 'مبنى المدرسة'
  }
];

const MediaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    const animTimer = setTimeout(() => {
      setHasAnimated(true);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(animTimer);
    };
  }, []);

  return (
    <section className="media-section" id="media">
      <div className="media-container">
        <motion.h2 
          className="media-section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          معرض الصور
        </motion.h2>
        
        {/* Image Gallery Grid */}
        <motion.div 
          className="gallery-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: 'easeOut' 
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSection;

