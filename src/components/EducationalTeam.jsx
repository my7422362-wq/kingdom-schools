import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/EducationalTeam.css';

const EducationalTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'أحمد محمد الراشد',
      title: 'مدير المدرسة',
      email: 'ahmed@school.edu',
      phone: '+966501234567',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'سارة عبدالله القحطاني',
      title: 'معلمة الرياضيات',
      email: 'sarah@school.edu',
      phone: '+966501234568',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'محمد إبراهيم حسن',
      title: 'معلم العلوم',
      email: 'mohammad@school.edu',
      phone: '+966501234569',
      image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
      id: 4,
      name: 'فاطمة علي المالكي',
      title: 'معلمة اللغة العربية',
      email: 'fatima@school.edu',
      phone: '+966501234570',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 5,
      name: 'عبدالله سليمان الحربي',
      title: 'معلم التاريخ والجغرافيا',
      email: 'abdullah@school.edu',
      phone: '+966501234571',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 6,
      name: 'منى يوسف الغامدي',
      title: 'معلمة الفنون',
      email: 'mona@school.edu',
      phone: '+966501234572',
      image: 'https://randomuser.me/api/portraits/women/90.jpg'
    },
    {
      id: 7,
      name: 'خالد عمر الشهري',
      title: 'معلم التربية البدنية',
      email: 'khaled@school.edu',
      phone: '+966501234573',
      image: 'https://randomuser.me/api/portraits/men/86.jpg'
    },
    {
      id: 8,
      name: 'نورة سعود الشمري',
      title: 'معلمة الحاسوب',
      email: 'noura@school.edu',
      phone: '+966501234574',
      image: 'https://randomuser.me/api/portraits/women/33.jpg'
    }
  ];

  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isScrolling) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isScrolling]);

  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  return (
    <section className="educational-team" id="educational-team">
      <div className="team-container">
        <motion.h2 
          className="team-section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          فريقنا التعليمي... خبرة، شغف، ورؤية مستقبلية
        </motion.h2>

        <div 
          className="team-scroll-container"
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="team-grid">
            {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              className="team-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: 'easeOut' 
              }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="team-card-header">
                <div className="team-avatar">
                  <img src={member.image} alt={member.name} />
                </div>
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-title">{member.title}</p>
              <div className="team-member-contact">
                <a 
                  href={`mailto:${member.email}`} 
                  className="contact-icon"
                  aria-label={`إرسال بريد إلكتروني إلى ${member.name}`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <a 
                  href={`tel:${member.phone}`} 
                  className="contact-icon"
                  aria-label={`الاتصال بـ ${member.name}`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalTeam;

