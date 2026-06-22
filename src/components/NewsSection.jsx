import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/NewsSection.css';

// مصفوفة كبيرة من صور التعليم والمدارس - جميعها فريدة ومdifferent
const allEducationImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
  'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
  'https://images.unsplash.com/photo-1577896337318-2869d389e2a8?w=800&q=80',
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
  'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&q=80',
  'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  'https://images.unsplash.com/photo-1544531696-b870d4d1d8d4?w=800&q=80',
  'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80',
  'https://images.unsplash.com/photo-1427504494785-281afd6946b8?w=800&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
  'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80'
];

// دالة لخلط المصفوفة (Fisher-Yates shuffle)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Sample news data with full descriptions
const newsData = [
  {
    id: 1,
    date: 'فبراير 16 , 2026',
    title: 'مدارس المملكة تنظم "لقاء شركاء مدارس المملكة" وتستعرض محطات التحول في مسيرتها التطويرية',
    shortText: 'استعرضت مدارس المملكة في هذا اللقاء أهم محطات التحول في مسيرتها التطويرية...',
    fullText: 'استعرضت مدارس المملكة في هذا اللقاء المهم أهم محطات التحول في مسيرتها التطويرية، حيث قدم فريق المدرسة عرضاً شاملاً للإنجازات التي تحققت خلال الفترة الماضية. حضر اللقاء مجموعة من أولياء الأمور والشركاء المحليين الذين أشادوا بالجهود المبذولة في تطوير المنظومة التعليمية. تم خلال اللقاء مناقشة الخطط المستقبلية لتعزيز جودة التعليم والتعلم، بالإضافة إلى المشاريع الجديدة التي سيتم إطلاقها خلال العام الدراسي القادم.'
  },
  {
    id: 2,
    date: 'فبراير 10 , 2026',
    title: 'تفعيلاً لأسبوع القراءة الوطني .. مدارس المملكة تنظم معرض الكتاب السنوي',
    shortText: 'أقامت مدارس المملكة معرض الكتاب السنوي ضمن فعاليات أسبوع القراءة الوطني...',
    fullText: 'أقامت مدارس المملكة معرض الكتاب السنوي ضمن فعاليات أسبوع القراءة الوطني، حيث شارك فيه طلاب وطالبات من جميع المراحل الدراسية. تضمن المعرض مجموعة متنوعة من الكتب في مختلف المجالات العلمية والأدبية والتاريخية. قام الطلاب بعرض إبداعاتهم في القراءة والقصص القصيرة، كما تم تكريم الطلاب المتميزين في القراءة والكتابة.'
  },
  {
    id: 3,
    date: 'فبراير 5 , 2026',
    title: 'مدارس المملكة تشارك في معرض التعليم والتدريب الدولي',
    shortText: 'شاركت مدارس المملكة في معرض التعليم والتدريب الدولي بجناح مميز...',
    fullText: 'شاركت مدارس المملكة في معرض التعليم والتدريب الدولي بجناح مميز استعرضت من خلاله أحدث برامجها التعليمية والممارسات المتميزة في مجال التعليم. تلقى الجناح إقبالاً كبيراً من الزوار والمهتمين في مجال التعليم، وتمكن فريق المدرسة من 建立 شراكات جديدة مع مؤسسات تعليمية عالمية.'
  },
  {
    id: 4,
    date: 'يناير 28 , 2026',
    title: 'انطلاق الأنشطة اللاصفية في مدارس المملكة لجميع المراحل الدراسية',
    shortText: 'انطلقت الأنشطة اللاصفية في مدارس المملكة بتشكيلات متنوعة تلبي اهتمامات الطلاب...',
    fullText: 'انطلقت الأنشطة اللاصفية في مدارس المملكة بتشكيلات متنوعة تلبي اهتمامات الطلاب في مختلف المراحل الدراسية. تشمل الأنشطة برامج الفنون والعلوم والرياضة والموسيقى والأنشطة التطوعية. تهدف هذه الأنشطة إلى تنمية مهارات الطلاب وتطوير شخصياتهم في بيئة تعليمية محفزة.'
  },
  {
    id: 5,
    date: 'يناير 20 , 2026',
    title: 'مدارس المملكة تحتفي باليوم الوطني السعودي',
    shortText: 'احتفت مدارس المملكة باليوم الوطني السعودي بفعاليات وأنشطة متنوعة...',
    fullText: 'احتفت مدارس المملكة باليوم الوطني السعودي بفعاليات وأنشطة متنوعة عبر فيها الطلاب والطالبات عن حبهم لل وطن وولائهم للقيادة الرشيدة. تضمن الحفل عروضاً تراثية ووطنية، بالإضافة إلى عروض الشعر والفنون الشعبية.'
  },
  {
    id: 6,
    date: 'يناير 15 , 2026',
    title: 'انطلاق الفصل الدراسي الثاني بحفل رسمي لطلاب مدارس المملكة',
    shortText: 'انطلق الفصل الدراسي الثاني في مدارس المملكة بحفل رسمي مهيب...',
    fullText: 'انطلق الفصل الدراسي الثاني في مدارس المملكة بحفل رسمي مهيب حضره أولياء الأمور والطلاب. تضمن الحفل كلمات ترحيبية من الإدارة وكلمات الطلاب، بالإضافة إلى العروض الفنية التي أكدت رسالة المدرسة في بناء جيل مثقف وواعٍ.'
  }
];

// صورة افتراضية في حالة فشل تحميل الصورة
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80';

const NewsSection = () => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  
  // إنشاء مصفوفتين من الصور المخلوطة - واحدة للصور الرئيسية وواحدة للتذييل
  const imageSets = useMemo(() => {
    const mainImages = shuffleArray(allEducationImages);
    const footerImages = shuffleArray(allEducationImages);
    return { mainImages, footerImages };
  }, []);

  // الحصول على صورة فريدة لكل خبر - للصورة الرئيسية
  const getMainImage = (index) => {
    if (index < imageSets.mainImages.length) {
      return imageSets.mainImages[index];
    }
    // إذا انتهت المصفوفة، أعد خلطها
    return shuffleArray(allEducationImages)[index % allEducationImages.length];
  };

  // الحصول على صورة فريدة للتذييل (تختلف عن الصورة الرئيسية)
  const getFooterImage = (index) => {
    const footerIndex = index + imageSets.mainImages.length;
    if (footerIndex < imageSets.footerImages.length) {
      return imageSets.footerImages[footerIndex];
    }
    // إذا انتهت المصفوفة، استخدم صورة مختلفة
    return shuffleArray(allEducationImages)[(footerIndex) % allEducationImages.length];
  };

  // معالجة فشل تحميل الصورة
  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  // الحصول على صورة الخبر مع التعامل مع الأخطاء
  const getNewsImage = (news, index, type = 'main') => {
    if (imageErrors[news.id]) {
      return DEFAULT_IMAGE;
    }
    if (type === 'main') {
      return getMainImage(index);
    } else {
      return getFooterImage(index);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isScrolling) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
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

  const openModal = (news) => {
    setSelectedNews(news);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'auto';
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="news-section" id="news">
      <div className="news-container">
        <motion.h2 
          className="news-section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          الأخبار
        </motion.h2>

        <div 
          className="news-scroll-container"
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="news-grid">
            {newsData.map((news, index) => (
              <motion.div 
                key={news.id}
                className="news-card"
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
                {/* News Image - صورة رئيسية فريدة */}
                <div className="news-image-container">
                  <img 
                    src={getNewsImage(news, index, 'main')}
                    alt={news.title}
                    className="news-image"
                    loading="lazy"
                    onError={() => handleImageError(news.id)}
                  />
                </div>

                <div className="news-content">
                  <span className="news-date">
                    {news.date}
                  </span>

                  <h3 className="news-title">
                    {news.title}
                  </h3>

                  <p className="news-short-text">
                    {news.shortText}
                  </p>

                  <button 
                    className="news-more-button"
                    onClick={() => openModal(news)}
                  >
                    عرض المزيد
                  </button>
                </div>

                {/* Footer Image - صورة مختلفة للصورة الرئيسية */}
                <div className="news-footer">
                  <div className="news-logo">
                    <img 
                      src={getNewsImage(news, index, 'footer')}
                      alt="أخبار مدارس المملكة" 
                      className="footer-logo-image"
                      loading="lazy"
                      onError={() => handleImageError(news.id + '_footer')}
                    />
                  </div>

                  <a 
                    href="https://linktr.ee/Muhammed_Youssef" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="news-link-button"
                    aria-label="المزيد من الأخبار"
                  >
                    social media
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedNews && (
            <motion.div 
              className="news-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleOverlayClick}
            >
              <motion.div 
                className="news-modal"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="news-modal-close"
                  onClick={closeModal}
                  aria-label="إغلاق"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <div className="news-modal-content">
                  <div className="news-modal-image-container">
                    <img 
                      src={getNewsImage(selectedNews, newsData.findIndex(n => n.id === selectedNews.id), 'main')}
                      alt={selectedNews.title} 
                      className="news-modal-image"
                      loading="lazy"
                    />
                  </div>

                  <span className="news-modal-date">
                    {selectedNews.date}
                  </span>

                  <h2 className="news-modal-title">
                    {selectedNews.title}
                  </h2>

                  <p className="news-modal-description">
                    {selectedNews.fullText}
                  </p>

                  <div className="news-modal-share">
                    <a 
                      href="https://linktr.ee/Muhammed_Youssef" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="news-modal-link-button"
                      aria-label="المزيد من الأخبار"
                    >
                      social media
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsSection;

