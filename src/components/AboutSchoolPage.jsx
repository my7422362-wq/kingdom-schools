import { motion } from 'framer-motion';
import '../styles/AboutSchoolPage.css';

const AboutSchoolPage = ({ onGoBack }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div 
      className="about-school-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button 
        onClick={() => window.history.back()}
        className="back-button" 
        aria-label="العودة"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ 
          x: -5,
          transition: { duration: 0.2 }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.button>

      <motion.section 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="about-school-logo"
          variants={slideFromLeft}
        >
          <img src="/about.jpg" alt="School Logo" />
        </motion.div>
        
        <motion.h2 
          className="about-title"
          variants={slideFromRight}
        >
          عن المدارس
        </motion.h2>
        
        <motion.p 
          className="about-description"
          variants={itemVariants}
        >
          في مدارس المملكة بالرياض، تمثل العملية التعليمية رحلة متكاملة تُعنى بالعقل والجسد. 
          فمن فضول أطفال مرحلة رياض الأطفال المليء بالبهجة، إلى ثقة طلب المرحلة الثانوية، 
          صُممت كل مرحلة لتلهم التعلم والإبداع وتنمي الشخصية.
        </motion.p>
      </motion.section>

      <motion.footer 
        className="about-footer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="footer-container">
          <motion.div 
            className="footer-logos"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="footer-logo-item"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="footer-logo-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span>وزارة التعليم</span>
            </motion.div>
            <motion.div 
              className="footer-logo-item"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="footer-logo-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span>اعتماد Cognia</span>
            </motion.div>
            <motion.div 
              className="footer-logo-item"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="footer-logo-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span>مدارس المملكة</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a 
              href="mailto:parent.relation@kingdomschools.edu.sa" 
              className="footer-email"
              whileHover={{ 
                scale: 1.02,
                color: '#f59e0b',
                transition: { duration: 0.2 }
              }}
            >
              parent.relation@kingdomschools.edu.sa
            </motion.a>
            
            <div className="footer-social">
              <motion.a 
                href="https://linktr.ee/Muhammed_Youssef" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="لينكات التواصل"
                whileHover={{ 
                  scale: 1.1,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-links"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="footer-links-column"
              variants={itemVariants}
            >
              <h4>روابط سريعة</h4>
              <ul>
                <li><motion.a 
                  href="/"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  الرئيسية
                </motion.a></li>
                <li><motion.a 
                  href="/about"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  عن المدارس
                </motion.a></li>
                <li><motion.a 
                  href="/welcome"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  الرسالة الترحيبية
                </motion.a></li>
                <li><motion.a 
                  href="/vision"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  الرؤية والرسالة
                </motion.a></li>
              </ul>
            </motion.div>
            <motion.div 
              className="footer-links-column"
              variants={itemVariants}
            >
              <h4>المزيد</h4>
              <ul>
                <li><motion.a 
                  href="/programs"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  البرامج التعليمية
                </motion.a></li>
                <li><motion.a 
                  href="/team"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  فريقنا
                </motion.a></li>
                <li><motion.a 
                  href="/calendar"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  التقويم الدراسي
                </motion.a></li>
                <li><motion.a 
                  href="/admission"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  سياسة القبول
                </motion.a></li>
              </ul>
            </motion.div>
            <motion.div 
              className="footer-links-column"
              variants={itemVariants}
            >
              <h4>معلومات</h4>
              <ul>
                <li><motion.a 
                  href="/fees"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  الرسوم الدراسية
                </motion.a></li>
                <li><motion.a 
                  href="/news"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  الأخبار
                </motion.a></li>
                <li><motion.a 
                  href="/elearning"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  التعليم الإلكتروني
                </motion.a></li>
                <li><motion.a 
                  href="/careers"
                  whileHover={{ 
                    x: 5,
                    color: '#f59e0b',
                    transition: { duration: 0.2 }
                  }}
                >
                  التوظيف
                </motion.a></li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="footer-copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>حقوق النشر محفوظة لمدارس المملكة بالرياض © 2025</p>
          </motion.div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default AboutSchoolPage;

