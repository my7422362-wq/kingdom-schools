import { useState } from 'react';
import { motion } from 'framer-motion';
import RegistrationModal from './RegistrationModal';
import '../styles/hero.css';

const RegistrationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    // Use history.back() to return to previous page with its scroll position
    window.history.back();
  };

  return (
    <div className="registration-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {isModalOpen && (
          <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </motion.div>
    </div>
  );
};

export default RegistrationPage;

