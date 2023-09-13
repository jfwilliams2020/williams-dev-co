"use client"
import Image from "next/image";
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex p-6 items-center text-white relative">
        <div className="font-semibold flex-auto text-4xl">
          <a href="#">sunnyside</a>
        </div>
        <div className="hidden md:flex space-x-10 items-center">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <button className="font-fraunces text-black bg-white px-6 py-4 rounded-full">CONTACT</button>
        </div>
        <button className="flex md:hidden h-8 w-8 z-20 relative" onClick={() => setIsOpen(prev => !prev)}>
          <Image 
            src="/images/icon-hamburger.svg"
            alt="Hamburger"
            fill
          />
        </button>
        {isOpen && (
          <div className="absolute top-20 left-10 right-10 bg-white text-[#a7abae] text-center p-10 space-y-5 z-20">
            <a href="#" onClick={() => setIsOpen(false)} className="block">
              About
            </a>
            <a href="#" onClick={() => setIsOpen(false)} className="block">
              Services
            </a>
            <a href="#" onClick={() => setIsOpen(false)} className="block">
              Projects
            </a>
          <button className="font-fraunces text-black bg-[#fad400] px-6 py-4 rounded-full">CONTACT</button>
          </div>
        )}
      </div>
      {isOpen && (
        <div 
          className="absolute top-0 bottom-0 left-0 right-0 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
