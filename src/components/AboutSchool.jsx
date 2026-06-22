import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutSchool.css';

const AboutSchool = () => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate('/about');
  };

  return (
    <section className="about-school" id="about-school">
      <motion.h2 
        className="about-school-title"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        عن المدارس
      </motion.h2>

      <motion.div 
        className="about-school-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <img src="/about.jpg" alt="شعار مدارس المملكة" />
      </motion.div>

      <motion.p 
        className="about-school-description"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        نحن مؤسسة تعليمية رائدة في المملكة العربية السعودية، نسعى لتقديم تعليم متميز يجمع بين الالتزام بالقيم الإسلامية والتميز الأكاديمي. 
        تتميز مدارسنا بمناهج حديثة ومرافق مجهزة بأحدث التقنيات، إضافة إلى كوادر تدريسية مؤهلة تضمن لأبنائنا رحلة تعليمية ثرية ومثمرة.
        نفخر بأننا نصنع قادة المستقبل في بيئة تعليمية آمنة ومحفزة على الإبداع والتميز.
      </motion.p>

      <motion.button 
        type="button" 
        className="about-school-button" 
        onClick={handleShowMore}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        whileHover={{ 
          scale: 1.05,
          backgroundColor: '#d97706',
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        عرض المزيد
      </motion.button>
    </section>
  );
};

export default AboutSchool;

