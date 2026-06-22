
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* School Logo & Name */}
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.img 
            src="/about.jpg" 
            alt="شعار مدارس المملكة" 
            className="footer-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          />
          <motion.h3 
            className="footer-school-name"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          >
            مدارس المملكة
          </motion.h3>
          <motion.p 
            className="footer-tagline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          >
            نحو تعليم متميز
          </motion.p>
        </motion.div>

        {/* Social Link Button */}
        <motion.div 
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        >
          <a 
            href="https://linktr.ee/Muhammed_Youssef" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link-button"
          >
            <span>تابعنا</span>
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="footer-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        >
          <p>© {currentYear} مدارس المملكة. جميع الحقوق محفوظة</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


