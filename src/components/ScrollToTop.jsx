import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #2ecc71, #3498db)',
            color: '#000',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.5rem',
            boxShadow: '0 5px 20px rgba(46, 204, 113, 0.4)',
            transition: 'all 0.3s ease',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1) translateY(-5px)';
            e.target.style.boxShadow = '0 8px 25px rgba(46, 204, 113, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) translateY(0)';
            e.target.style.boxShadow = '0 5px 20px rgba(46, 204, 113, 0.4)';
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;