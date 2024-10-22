import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const typedRef = useRef(null); // Create a ref for the typed element

  useEffect(() => {
    const options = {
      strings: [
        "&lt;miss3persin/&gt;", // Escape < and > for HTML
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      // Remove cursorChar to use the default cursor
    };

    // Initialize Typed
    const typed = new Typed(typedRef.current, options);

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex -translate-x-32 items-center text-3xl">
      <span ref={typedRef} className="text-[#F4EEE0]" />
    </div>
  );
};

export default TypedText;
