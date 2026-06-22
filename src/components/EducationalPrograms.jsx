import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/EducationalPrograms.css';

const EducationalPrograms = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate('/academic-calendar');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="educational-programs" id="programs">
      <div className="educational-programs-container">
        <motion.h2 
          className="educational-programs-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          البرامج التعليمية التي يمكنك التسجيل فيها
        </motion.h2>
        
        <motion.div 
          className="educational-programs-text"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={itemVariants}>
            تقدم مدارس المملكة برامج تعليمية متكاملة تجمع بين المناهج الوطنية والمعايير العالمية، وتتميز بحصولها على اعتماد Cognia K–12، مما يعكس التزامها بأعلى معايير الجودة التعليمية. وهي أيضًا مدرسة مرشحة لبرنامج السنوات الابتدائية (PYP) للبكالوريا الدولية وتسعى للحصول على الاعتماد الكامل كمدرسة عالمية للـ IBPYP. مما يؤكد التزامها بتقديم تعليم عالي الجودة، متنوع، ومتجدد يلبي احتياجات الطلاب في بيئة دولية. تركز البرامج على إتقان اللغات، وتنمية مهارات التفكير الناقد والإبداعي، إلى جانب تقديم مسارات إثرائية في مجالات العلوم والتكنولوجيا والهندسة والرياضيات (STEAM) والذكاء الاصطناعي. كما تعقد المدارس شراكات استراتيجية مع مؤسسات تعليمية مرموقة محليًا ودوليًا، وتوفر أنشطة لاصفية متنوعة تسهم في إعداد الطلاب للحياة الجامعية وسوق العمل.
          </motion.p>
        </motion.div>
        
        <motion.button 
          className="educational-programs-button" 
          onClick={handleDownload}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: '#d97706',
            boxShadow: '0 8px 25px rgba(245, 158, 11, 0.5)',
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          اضغط هنا لتحميل التقويم الدراسي
        </motion.button>
      </div>
    </section>
  );
};

export default EducationalPrograms;

