"use client"
import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

export default function Hero() {
  return (
      <section className="text-gray-600 body-font bg-gray-100 min-h-screen flex items-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am 
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                strings: ['Sardar Azeem', 'Frontend Developer'],
                autoStart: true,
                loop: true,
              }}
/>
            </h1>
            <div className="w-[100-px] h-[2px] bg-blue-700"></div>
            <p className="mb-8 leading-relaxed">
            As a skilled frontend developer, I bring expertise in HTML,
             CSS, JavaScript, and TypeScript, along with extensive 
             experience in modern frameworks like React and Next.js. 
             I specialize in creating responsive, dynamic web 
             applications that prioritize user experience and 
             performance.
            </p>
            
            <div className="flex justify-center">
            <Link href="#contact">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center mx-auto rounded-full w-[15rem]"
              alt="profile-pic"
              width={500}
              height={500}
              src="/assets/pictures/profile-pic (2).png"
            />
          </div>
        </div>
      </section>
  );
}
