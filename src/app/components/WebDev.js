'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import React from 'react'
import { Card } from './Card'
import Slider from 'react-slick';

const cardGroups = [
    [
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
    ],
    [
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
    ],
    [
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
      {
        title: "SWAVHAIR STUDIO BARBERSHOP",
        imgSrc: "/swavhair-img.png",
        demoLink: "https://github.com/miss3persin/demo",
        codeLink: "https://github.com/miss3persin/code",
      },
    ],

  ];

export const WebDev = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [backgroundText, setBackgroundText] = useState('')
    const [speeds, setSpeeds] = useState([1000, 1500]);
    const sliderRefs = useRef([]);

  const changeSpeeds = () => {
    const newSpeeds = Array.from({ length: cardGroups.length }, () =>
      Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000
    );
    setSpeeds(newSpeeds);
  };

  useEffect(() => {
    changeSpeeds();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000, // Transition speed (smooth)
    autoplay: true,
    autoplaySpeed: null, // Set to null to let individual speeds take over
    pauseOnHover: true, // Pause on hover
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear', // Smooth transition effect
  };
  
    const buttons = [
      {
        id: 1,
        icon: '/x-stroke-alt.png',
        hoverIcon: '/home-icon-alt.svg',
        label: 'ㅤHOMEㅤ',
        targetId: 'home-section'
      },
      {
        id: 2,
        icon: '/x-stroke-alt.png',
        hoverIcon: '/about-icon-alt.svg',
        label: 'ABOUT ME',
        targetId: 'about-section'
      },
      {
        id: 3,
        icon: '/x-stroke-alt.png',
        hoverIcon: '/skills-alt.svg',
        label: 'PROGRAMMING SKILLS',
        targetId: 'skills-section'
      },
      {
        id: 4,
        icon: '/x-stroke-alt.png',
        hoverIcon: '/web-dev-alt.svg',
        label: 'WEB DEVELOPMENT PORTFOLIO',
        targetId: 'web-dev-section'
      },
      {
        id: 4,
        icon: '/x-stroke-alt.png',
        hoverIcon: '/ML-alt.svg',
        label: 'MACHINE LEARNING PORTFOLIO',
        targetId: 'ml-section'
      },
      {
        id: 4,
        icon: '/x-stroke-alt.png',
        hoverIcon: '/contact-alt.svg',
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
      let randomText = ''
      const wordsPerLine = Math.floor(window.innerWidth / 40) // Change 40 to adjust the number of characters per word
      const lines = Math.floor(window.innerHeight / 31.8) // Change 20 to adjust the height per line
      const totalWords = wordsPerLine * lines // Total words based on screen size
  
      for (let i = 0; i < totalWords; i++) {
        randomText += Math.random().toString(36).substring(2, 15) + ' '
      }
      setBackgroundText(randomText)
    }
  
    useEffect(() => {
      generateRandomText() // Generate initial text
      const intervalId = setInterval(generateRandomText, 100) // Update every 100ms
      window.addEventListener('resize', generateRandomText) // Update text on window resize
      return () => {
        clearInterval(intervalId) // Cleanup on unmount
        window.removeEventListener('resize', generateRandomText) // Cleanup event listener
      }
    }, [])

  return (
    <div
    className='relative flex h-screen flex-col items-center justify-center border-[1rem] border-black bg-[#F4EEE0] text-black'
    id='web-dev-section'
  >
    {/* Dynamic Background Text */}
    <div className='absolute left-0 top-0 flex h-full w-full select-none items-center justify-center overflow-hidden opacity-10'>
      <pre className='h-full whitespace-pre-line text-justify font-mono text-xs text-black'>
        {backgroundText}
      </pre>
    </div>

    <div className='flex items-center justify-center gap-20 overflow-hidden w-full'>
    <div className="h-full w-8/12 pl-14 flex gap-5">
      {cardGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="w-1/3 overflow-hidden relative z-10 h-[70rem] -top-20 -rotate-12">
          <Slider
            ref={ref => (sliderRefs.current[groupIndex] = ref)} // Set the ref for each slider
            {...sliderSettings}
            autoplaySpeed={speeds[groupIndex]}
            style={{ height: '100%' }}
            beforeChange={(current, next) => {
              setTimeout(() => {
                sliderRefs.current[groupIndex]?.slickGoTo(next); // Use ref to control slider
              }, speeds[groupIndex]); // Use groupIndex from outer scope
            }}
          >
            {group.map((card, cardIndex) => (
              <div className="flex justify-center items-center h-full" key={cardIndex}>
                <Card
                  title={card.title}
                  imgSrc={card.imgSrc}
                  demoLink={card.demoLink}
                  codeLink={card.codeLink}
                />
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>

      <div className='w-4/6 pl-0 pr-44'>
        <div className='mb-4 flex flex-col items-end justify-center'>
          <div className='mb-6 flex flex-col items-center justify-center'>
            <Image src='/web-development.png' alt='web development' width={1000} height={1000} className='w-96 h-auto relative z-10' />
            <p className=' text-3xl font-bold -mt-8'>PROJECTS</p>
          </div>

        <div className='text-lg font-medium mb-16 w-full max-w-96'>
          <p className='text-center'>Here are some of my handpicked <br/> Web Development Projects</p>
        </div>

        <div className=''>
            <div className='mb-6 flex space-x-10'>
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

            <div className='flex select-none space-x-10'>
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className='flex h-10 w-8 items-center justify-center'
                >
                  <div>
                    <Image
                      src='/x-stroke-alt.png'
                      width={25}
                      height={25}
                      className='hover:pause-spin animate-spin' // Use hover:pause-spin class
                      alt='Spinning Icon'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className='absolute right-0 top-0 overflow-hidden pointer-events-none'>
      <Image
        src='/brush-stroke-alt.png'
        width={200}
        height={100}
        className='scale-x-[-1] transform -rotate-45'
      />
      <Image
        src='/brush-stroke-alt.png'
        width={200}
        height={100}
        className='scale-x-[-1] translate-x-14 -translate-y-8 transform -rotate-45'
      />
      <Image
        src='/brush-stroke-alt.png'
        width={200}
        height={100}
        className='scale-x-[-1] translate-x-14 -translate-y-5 transform -rotate-45'
      />
    </div>



    <div className='absolute bottom-0 left-0 overflow-hidden pointer-events-none'>
      <Image src='/brush-stroke-alt.png' width={200} height={100} className='-rotate-45 -translate-x-14 translate-y-10'/>
      <Image src='/brush-stroke-alt.png' width={200} height={100} className='-rotate-45 -translate-x-11 translate-y-14'/>
      <Image src='/brush-stroke-alt.png' width={200} height={100} className='-rotate-45 translate-x-3 translate-y-8'/>
    </div>
  </div>
  )
}
