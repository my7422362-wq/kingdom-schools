import { motion } from 'framer-motion';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      icon: '🎓',
      title: 'التميز في التعلم',
      text: 'تقدم تجربة تعليمية رائدة تقوم على معايير عالمية توازن بين المعرفة الأكاديمية العميقة والمهارات العملية، لتمكن طلابنا من بلوغ أقصى إمكاناتهم.'
    },
    {
      id: 2,
      icon: '🌏',
      title: 'هوية ثقافية وقيم إسلامية ومواطنة عالمية',
      text: 'نغرس في طلابنا الاعتزاز بالهوية الوطنية والقيم الإسلامية الراسخة، مع تعزيز روح التسامح والانفتاح على العالم.'
    },
    {
      id: 3,
      icon: '⭐',
      title: 'قيادة ملهمة',
      text: 'نركز على بناء الشخصية القيادية القادرة على اتخاذ القرارات الحكيمة وتحمل المسؤولية وخدمة المجتمع.'
    },
    {
      id: 4,
      icon: '💡',
      title: 'ابتكار واستعداد للمستقبل',
      text: 'نهيئ بيئة تعليمية تحفز على الإبداع والتفكير النقدي وتكسب الطلاب مهارات المستقبل.'
    },
    {
      id: 5,
      icon: '🌿',
      title: 'رفاهية وتنمية شاملة',
      text: 'نهتم برعاية الطالب جسديًا ونفسيًا واجتماعيًا من خلال برامج متكاملة.'
    },
    {
      id: 6,
      icon: '🤝',
      title: 'مشاركة مجتمعية وتعاون',
      text: 'نؤمن بأن المدرسة جزء فاعل من المجتمع ونعمل على تعزيز روح التعاون وخدمة الآخرين.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="why-choose-us" id="why-choose-us">
      <div className="why-choose-us-container">
        <motion.h2 
          className="why-choose-us-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          لماذا تختار مدارس المملكة؟
        </motion.h2>
        
        <motion.div 
          className="why-choose-us-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card) => (
            <motion.div 
              key={card.id} 
              className="why-choose-us-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="why-choose-us-card-icon"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                {card.icon}
              </motion.div>
              <h3 className="why-choose-us-card-title">{card.title}</h3>
              <p className="why-choose-us-card-text">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

