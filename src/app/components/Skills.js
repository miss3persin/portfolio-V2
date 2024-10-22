'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import React from 'react'
import TypedText from './TypedText'

export const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [backgroundText, setBackgroundText] = useState('')

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
      id='skills-section'
      className='relative flex h-screen flex-row items-center justify-center border-[1rem] border-[#F4EEE0] bg-black text-[#f4eee0]'
    >
      {/* Dynamic Background Text */}
      <div className='absolute left-0 top-0 flex h-full w-full select-none items-center justify-center overflow-hidden opacity-10'>
        <pre className='h-full whitespace-pre-line text-justify font-mono text-xs text-[#F4EEE0]'>
          {backgroundText}
        </pre>
      </div>

      <div className='flex flex-col justify-center items-center gap-10'>
      <div className='mb-8 -translate-x-32'>
        <div className='mb-4 flex space-x-10'>
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
                className={`pointer-events-none absolute right-full z-10 mr-2 min-w-max rounded bg-black px-2 py-3 text-sm font-semibold text-[#f4eee0] transition-all duration-500 ease-in-out ${
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
                  src='/x-stroke.png'
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

      <TypedText />
      </div>

      <div className='flex flex-col items-center justify-center mr-10'>
        <div className='relative z-10 w-72'>
          <Image
            src='/programming-text.png'
            alt='cursive-fonts'
            border='0'
            width={1000}
            height={1000}
            className='h-full w-full object-contain'
          />
        </div>
        <p className='-mt-10 mb-20 text-3xl font-bold'>SKILLS</p>
        <div className='relative flex flex-row items-center justify-center gap-64'>

            <div className='relative flex flex-col items-center justify-center gap-8'>
          <div class='icon-container'>
            <Image
              src='/react-color.svg'
              alt='react'
              width={1000}
              height={1000}
              className='icon1 h-10 w-10 transition-all duration-300 ease-in-out'
            />
            <span class='hidden-text hidden-text-1 px-3 py-2 text-sm font-semibold text-black'>
              React (HTML + JavaScript)
            </span>
          </div>
          

          <div class='icon-container'>
            <Image
              src='/nextdotjs-color.svg'
              alt='react'
              width={1000}
              height={1000}
              className='icon5 h-10 w-10 transition-all duration-300 ease-in-out'
            />
            <span class='hidden-text text-sm hidden-text-5 px-3 py-2 font-semibold text-black'>
              The react framework - NextJS
            </span>
          </div>


          <div class='icon-container'>
            <Image
              src='/python-color.svg'
              alt='react'
              width={1000}
              height={1000}
              className='icon3 h-10 w-10 transition-all duration-300 ease-in-out'
            />
            <span class='hidden-text text-sm hidden-text-3 px-3 py-2 font-semibold text-black'>
              Python for scripts and automation
            </span>
          </div>
          </div>



          <div className='relative flex flex-col items-center justify-center gap-8'>

          <div class='icon-container'>
            <Image
              src='/tailwindcss-color.svg'
              alt='react'
              width={1000}
              height={1000}
              className='icon2 h-10 w-10 transition-all duration-300 ease-in-out'
            />
            <span class='hidden-text hidden-text-2 px-3 text-sm py-2 font-semibold text-black'>
              Tailwindcss including just plain CSS
            </span>
          </div>


          <div class='icon-container'>
            <Image
              src='/nodedotjs-color.svg'
              alt='react'
              width={1000}
              height={1000}
              className='icon4 h-10 w-10 transition-all duration-300 ease-in-out'
            />
            <span class='hidden-text text-sm hidden-text-4 px-3 py-2 font-semibold text-black'>
              NodeJS backend knowledge
            </span>
          </div>


          <div class='icon-container'>
            <Image
              src='/pytorch-color.svg'
              alt='react'
              width={1000}
              height={1000}
              className='icon6 h-10 w-10 transition-all duration-300 ease-in-out'
            />
            <span class='hidden-text text-sm hidden-text-6 px-3 py-2 font-semibold text-black'>
              Pytorch with a little bit of Tensorflow knowledge
            </span>
          </div>
          </div>
        </div>
      </div>

      <div className='pointer-events-none absolute right-0 top-0 overflow-hidden'>
        <Image
          src='/brush-stroke.png'
          width={200}
          height={100}
          className='-rotate-45 scale-x-[-1] transform'
        />
        <Image
          src='/brush-stroke.png'
          width={200}
          height={100}
          className='-translate-y-8 translate-x-14 -rotate-45 scale-x-[-1] transform'
        />
        <Image
          src='/brush-stroke.png'
          width={200}
          height={100}
          className='-translate-y-5 translate-x-14 -rotate-45 scale-x-[-1] transform'
        />
      </div>

      <div className='pointer-events-none absolute bottom-0 left-0 overflow-hidden'>
        <Image
          src='/brush-stroke.png'
          width={200}
          height={100}
          className='-translate-x-14 translate-y-10 -rotate-45'
        />
        <Image
          src='/brush-stroke.png'
          width={200}
          height={100}
          className='-translate-x-11 translate-y-14 -rotate-45'
        />
        <Image
          src='/brush-stroke.png'
          width={200}
          height={100}
          className='translate-x-3 translate-y-8 -rotate-45'
        />
      </div>
    </div>
  )
}
