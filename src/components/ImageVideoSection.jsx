import { motion } from 'framer-motion';
import '../styles/ImageVideoSection.css';

const ImageVideoSection = () => {
  return (
    <section className="image-video-section" id="image-video">
      <div className="image-video-container">
        {/* Image Part - slides from left */}
        <motion.div 
          className="image-part"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80" 
            alt="مبنى المدرسة" 
            className="section-image"
          />
          <div className="image-overlay">
            <h3>مرحباً بكم في مدارس المملكة</h3>
          </div>
        </motion.div>

        {/* Video Part - slides from right */}
        <motion.div 
          className="video-part"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="video-container">
            <video 
              className="section-video"
              controls
              poster="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-description">
            <h3>فيديو تعريفي عن المدرسة</h3>
            <p>شاهد فيديو تعريفي يوضح الأنشطة التعليمية والحياة المدرسية</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageVideoSection;

