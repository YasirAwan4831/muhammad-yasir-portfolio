// src/hooks/useCustomCursor.js
import { useEffect } from 'react';

const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);
};

export default useCustomCursor;