'use client'; // Important for client-side hooks like useEffect

import { useEffect } from 'react';
import React from 'react'
import { Home } from './components/Home'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { WebDev } from './components/WebDev';
import { ML } from './components/ML';

const page = () => {

    // Handle scroll restoration on reload
    useEffect(() => {
      // Set scroll restoration to manual
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
  
      // Scroll to previous position if available
      const storedScrollPosition = window.sessionStorage.getItem('scrollPosition');
      if (storedScrollPosition) {
        window.scrollTo(0, parseInt(storedScrollPosition, 10));
      }
  
      // Save scroll position before the page is unloaded
      const saveScrollPosition = () => {
        window.sessionStorage.setItem('scrollPosition', window.scrollY);
      };
  
      window.addEventListener('beforeunload', saveScrollPosition);
  
      return () => {
        window.removeEventListener('beforeunload', saveScrollPosition);
      };
    }, []);

  return (
    <div className=''>
    <Home/>
    <About/>
    <Skills/>
    <WebDev/>
    <ML/>
  </div>
  )
}

export default page