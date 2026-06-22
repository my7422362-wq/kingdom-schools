import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MonthCalendar from './MonthCalendar';
import '../styles/AcademicCalendar.css';

const AcademicCalendar = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const months = [
    { name: 'January', monthNumber: 1, numDays: 31, startDay: 3 },
    { name: 'February', monthNumber: 2, numDays: 28, startDay: 6 },
    { name: 'March', monthNumber: 3, numDays: 31, startDay: 6 },
    { name: 'April', monthNumber: 4, numDays: 30, startDay: 2 },
    { name: 'May', monthNumber: 5, numDays: 31, startDay: 4 },
    { name: 'June', monthNumber: 6, numDays: 30, startDay: 0 },
    { name: 'July', monthNumber: 7, numDays: 31, startDay: 2 },
    { name: 'August', monthNumber: 8, numDays: 31, startDay: 5 },
    { name: 'September', monthNumber: 9, numDays: 30, startDay: 1 },
    { name: 'October', monthNumber: 10, numDays: 31, startDay: 3 },
    { name: 'November', monthNumber: 11, numDays: 30, startDay: 6 },
    { name: 'December', monthNumber: 12, numDays: 31, startDay: 1 }
  ];

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
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const handleBackClick = () => {
    // Use history.back() to return to previous page with its scroll position
    window.history.back();
  };

  return (
    <div className="academic-calendar-page" id="calendar">
      {/* Back Button */}
      <button 
        onClick={handleBackClick}
        className="back-button" 
        aria-label="العودة إلى البرامج التعليمية"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <div className="calendar-hero">
        <div className="calendar-hero-overlay"></div>
        <motion.h1 
          className="calendar-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          التقويم الدراسي 2025 - 2026
        </motion.h1>
      </div>
      
      <motion.div 
        className="calendar-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="calendar-grid">
          {months.map((month, index) => (
            <motion.div key={month.name} variants={itemVariants}>
              <MonthCalendar 
                monthName={month.name}
                monthNumber={month.monthNumber}
                numDays={month.numDays}
                startDay={month.startDay}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AcademicCalendar;

