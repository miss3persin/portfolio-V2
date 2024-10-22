'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import React from 'react'

export const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [backgroundText, setBackgroundText] = useState('');


  const buttons = [
    {
      id: 1,
      icon: '/x-stroke.png',
      hoverIcon: '/home-icon.svg',
      label: 'ㅤHOMEㅤ',
      targetId: 'home-section'
    },
    {
      id: 2,
      icon: '/x-stroke.png',
      hoverIcon: '/about-icon.svg',
      label: 'ABOUT ME',
      targetId: 'about-section'
    },
    {
      id: 3,
      icon: '/x-stroke.png',
      hoverIcon: '/skills.svg',
      label: 'PROGRAMMING SKILLS',
      targetId: 'skills-section'
    },
    {
      id: 4,
      icon: '/x-stroke.png',
      hoverIcon: '/web-dev.svg',
      label: 'WEB DEVELOPMENT PORTFOLIO',
      targetId: 'web-dev-section'
    },
    {
      id: 4,
      icon: '/x-stroke.png',
      hoverIcon: '/ML.svg',
      label: 'MACHINE LEARNING PORTFOLIO',
      targetId: 'ml-section'
    },
    {
      id: 4,
      icon: '/x-stroke.png',
      hoverIcon: '/contact.svg',
      label: 'CONTACT',
      targetId: 'contact-section'
    }
  ]

  const handleClick = targetId => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }


   // Function to generate random text
   const generateRandomText = () => {
    let randomText = '';
    const wordsPerLine = Math.floor(window.innerWidth / 40); // Change 40 to adjust the number of characters per word
    const lines = Math.floor(window.innerHeight / 31.8); // Change 20 to adjust the height per line
    const totalWords = wordsPerLine * lines; // Total words based on screen size

    for (let i = 0; i < totalWords; i++) {
      randomText += Math.random().toString(36).substring(2, 15) + ' ';
    }
    setBackgroundText(randomText);
  };

  useEffect(() => {
    generateRandomText(); // Generate initial text
    const intervalId = setInterval(generateRandomText, 100); // Update every 100ms
    window.addEventListener('resize', generateRandomText); // Update text on window resize
    return () => {
      clearInterval(intervalId); // Cleanup on unmount
      window.removeEventListener('resize', generateRandomText); // Cleanup event listener
    };
  }, []);

  return (
    <div id="home-section" className='flex h-screen relative flex-col items-center justify-center border-[1rem] border-[#F4EEE0] bg-black text-[#f4eee0]'>
      {/* Dynamic Background Text */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden select-none flex items-center justify-center opacity-10'>
        <pre className='text-xs font-mono h-full whitespace-pre-line text-justify text-[#F4EEE0]'>{backgroundText}</pre>
      </div>

      <div className='-translate-x-80 -mt-20 mb-8'>
        <div className='flex space-x-10 mb-4'>
          {buttons.map((button, index) => (
            <div
              key={button.id}
              className='relative flex h-10 w-8 cursor-pointer items-center justify-center'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(button.targetId)}
            >
              {/* Base Spinning Icon */}
              <div
                className={`absolute transition-opacity duration-500 ease-in-out ${
                  hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <Image
                  src={button.icon}
                  width={25}
                  height={25}
                  className='animate-spin'
                  alt='Spinning Nav Icon'
                />
              </div>

              {/* Icon on Hover */}
              <div
                className={`absolute transition-opacity duration-500 ease-in-out ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={button.hoverIcon}
                  width={25}
                  height={25}
                  className='scale-110 transform transition-transform duration-500 ease-in-out'
                  alt='Hovered Nav Icon'
                />
              </div>

              {/* Hover Text */}
              <div
                className={`pointer-events-none absolute left-full z-10 ml-2 min-w-max rounded bg-black px-2 py-3 text-sm font-semibold text-[#f4eee0] transition-all duration-500 ease-in-out ${
                  hoveredIndex === index
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-4 opacity-0'
                }`}
              >
                {button.label}
              </div>
            </div>
          ))}
        </div>

        <div className='flex space-x-10 select-none'>
  {[...Array(6)].map((_, index) => (
    <div key={index} className='flex h-10 w-8 items-center justify-center'>
      <div>
        <Image
          src='/x-stroke.png'
          width={25}
          height={25}
          className='animate-spin hover:pause-spin' // Use hover:pause-spin class
          alt='Spinning Icon'
        />
      </div>
    </div>
  ))}
</div>
      </div>

      

      <div className='flex flex-col items-center justify-center'>
        <div className='w-[40rem] relative z-10'><Image src='/miss3persin.png' alt='miss3persin' width={1000} height={1000} className='object-contain w-full h-full' /></div>
        <p className='mb-10 -mt-28'>WEB DEVELOPMENTㅤ—ㅤ<span className='font-bold relative z-20'>PORTFOLIO</span>ㅤ—ㅤMACHINE LEARNING</p>
        <div className='flex items-center justify-center gap-8 relative'>
        <Image
          src='/brush-stroke-home.png'
          width={200}
          height={100}
          className='absolute w-[100rem] h-44 opacity-50'
        />
          <p className=''>2022</p>
          <div className='h-[0.1rem] w-80 bg-[#F4EEE0] rounded-3xl z-10'></div>
          <p className=''>2024</p>
        </div>
      </div>



      <div className='absolute right-0 top-0 overflow-hidden pointer-events-none'>
        <Image
          src='/brush-stroke.png'
          width={200}
          height={100}
          className='scale-x-[-1] transform -rotate-45'
        />
        <Image
          src='/brush-stroke.png'
          width={200}
          height={100}
          className='scale-x-[-1] translate-x-14 -translate-y-8 transform -rotate-45'
        />
        <Image
          src='/brush-stroke.png'
          width={200}
          height={100}
          className='scale-x-[-1] translate-x-14 -translate-y-5 transform -rotate-45'
        />
      </div>



      <div className='absolute bottom-0 left-0 overflow-hidden pointer-events-none'>
        <Image src='/brush-stroke.png' width={200} height={100} className='-rotate-45 -translate-x-14 translate-y-10'/>
        <Image src='/brush-stroke.png' width={200} height={100} className='-rotate-45 -translate-x-11 translate-y-14'/>
        <Image src='/brush-stroke.png' width={200} height={100} className='-rotate-45 translate-x-3 translate-y-8'/>
      </div>
    </div>
  )
}
