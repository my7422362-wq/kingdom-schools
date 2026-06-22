import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/registration-modal.css';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullNameEnglish: '',
    fullNameArabic: '',
    dateOfBirth: '',
    idNumber: '',
    academicLevel: '',
    siblingsInSchool: '',
    phoneNumber: '',
    email: '',
    contactPreference: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullNameEnglish: '',
        fullNameArabic: '',
        dateOfBirth: '',
        idNumber: '',
        academicLevel: '',
        siblingsInSchool: '',
        phoneNumber: '',
        email: '',
        contactPreference: ''
      });
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullNameEnglish.trim()) {
      newErrors.fullNameEnglish = 'الاسم باللغة الإنجليزية مطلوب';
    }
    
    if (!formData.fullNameArabic.trim()) {
      newErrors.fullNameArabic = 'الاسم الكامل بالعربية مطلوب';
    }
    
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'تاريخ الميلاد مطلوب';
    }
    
    if (!formData.idNumber.trim()) {
      newErrors.idNumber = 'رقم الهوية مطلوب';
    }
    
    if (!formData.academicLevel) {
      newErrors.academicLevel = 'المستوى الدراسي مطلوب';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'رقم الهاتف مطلوب';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }
    
    if (!formData.contactPreference) {
      newErrors.contactPreference = 'يرجى اختيار طريقة التواصل المفضلة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const academicLevels = [
    { value: '', label: 'اختر المستوى الدراسي' },
    { value: 'kg1', label: 'رياض الأطفال - KG1' },
    { value: 'kg2', label: 'رياض الأطفال - KG2' },
    { value: 'grade1', label: 'الصف الأول الابتدائي' },
    { value: 'grade2', label: 'الصف الثاني الابتدائي' },
    { value: 'grade3', label: 'الصف الثالث الابتدائي' },
    { value: 'grade4', label: 'الصف الرابع الابتدائي' },
    { value: 'grade5', label: 'الصف الخامس الابتدائي' },
    { value: 'grade6', label: 'الصف السادس الابتدائي' },
    { value: 'grade7', label: 'الصف الأول الإعدادي' },
    { value: 'grade8', label: 'الصف الثاني الإعدادي' },
    { value: 'grade9', label: 'الصف الثالث الإعدادي' },
    { value: 'grade10', label: 'الصف الأول الثانوي' },
    { value: 'grade11', label: 'الصف الثاني الثانوي' },
    { value: 'grade12', label: 'الصف الثالث الثانوي' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOverlayClick}
        >
          <motion.div 
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close-btn"
              onClick={onClose}
              aria-label="إغلاق نموذج التسجيل"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {isSubmitted ? (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="success-icon">
                  <svg 
                    width="64" 
                    height="64" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2>تم التسجيل بنجاح!</h2>
                <p>شكراً لك على التسجيل. سنتواصل معك قريباً.</p>
              </motion.div>
            ) : (
              <>
                <div className="modal-header">
                  <h2>تسجيل طالب جديد</h2>
                  <p>املا البيانات ليبدا ابنك رحلته التعليميه معنا!</p>
                </div>

                <form className="registration-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="fullNameEnglish">
                      الاسم بالإنجليزية <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullNameEnglish"
                      name="fullNameEnglish"
                      value={formData.fullNameEnglish}
                      onChange={handleChange}
                      placeholder="أدخل الاسم بالإنجليزية"
                      className={errors.fullNameEnglish ? 'error' : ''}
                      dir="ltr"
                    />
                    {errors.fullNameEnglish && (
                      <span className="error-message">{errors.fullNameEnglish}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="fullNameArabic">
                      الاسم بالعربية <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullNameArabic"
                      name="fullNameArabic"
                      value={formData.fullNameArabic}
                      onChange={handleChange}
                      placeholder="أدخل الاسم بالعربية"
                      className={errors.fullNameArabic ? 'error' : ''}
                      dir="rtl"
                    />
                    {errors.fullNameArabic && (
                      <span className="error-message">{errors.fullNameArabic}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="dateOfBirth">
                      تاريخ الميلاد <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className={errors.dateOfBirth ? 'error' : ''}
                      dir="ltr"
                    />
                    {errors.dateOfBirth && (
                      <span className="error-message">{errors.dateOfBirth}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="idNumber">
                      رقم الهوية <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      placeholder="أدخل رقم الهوية"
                      className={errors.idNumber ? 'error' : ''}
                      dir="ltr"
                    />
                    {errors.idNumber && (
                      <span className="error-message">{errors.idNumber}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="academicLevel">
                      المستوى الدراسي <span className="required">*</span>
                    </label>
                    <select
                      id="academicLevel"
                      name="academicLevel"
                      value={formData.academicLevel}
                      onChange={handleChange}
                      className={errors.academicLevel ? 'error' : ''}
                    >
                      {academicLevels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                    {errors.academicLevel && (
                      <span className="error-message">{errors.academicLevel}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="siblingsInSchool">
                      هل يوجد إخوة في المدرسة؟
                      <span className="optional">(اختياري)</span>
                    </label>
                    <select
                      id="siblingsInSchool"
                      name="siblingsInSchool"
                      value={formData.siblingsInSchool}
                      onChange={handleChange}
                    >
                      <option value="">اختر خياراً</option>
                      <option value="yes">نعم</option>
                      <option value="no">لا</option>
                    </select>
                  </div>

                  <div className="form-section-header">
                    <h3>معلومات التواصل</h3>
                    <p>يرجى إدخال معلومات التواصل الخاصة بك</p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phoneNumber">
                      رقم الهاتف <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="أدخل رقم الهاتف"
                      className={errors.phoneNumber ? 'error' : ''}
                      dir="ltr"
                    />
                    {errors.phoneNumber && (
                      <span className="error-message">{errors.phoneNumber}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      البريد الإلكتروني <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="أدخل البريد الإلكتروني"
                      className={errors.email ? 'error' : ''}
                      dir="ltr"
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactPreference">
                      كيف تفضل أن نتواصل معك؟ <span className="required">*</span>
                    </label>
                    <select
                      id="contactPreference"
                      name="contactPreference"
                      value={formData.contactPreference}
                      onChange={handleChange}
                      className={errors.contactPreference ? 'error' : ''}
                    >
                      <option value="">اختر طريقة التواصل</option>
                      <option value="phone">هاتف</option>
                      <option value="email">بريد إلكتروني</option>
                    </select>
                    {errors.contactPreference && (
                      <span className="error-message">{errors.contactPreference}</span>
                    )}
                  </div>

                  <button type="submit" className="submit-btn">
                    إرسال التسجيل
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;

