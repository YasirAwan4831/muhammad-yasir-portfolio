import { useEffect } from 'react';

const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    // Hide cursor on touch devices
    if ('ontouchstart' in window) {
      cursor.style.display = 'none';
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const speed = 0.2; // Lower = slower smoothing

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      cursor.style.left = posX + 'px';
      cursor.style.top = posY + 'px';

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', moveCursor);
    animate();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);
};

export default useCustomCursor;
