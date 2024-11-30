import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="bg-orange-400 z-50 sticky top-0">
      <header className="text-gray-600 body-font bg-gray-500">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/assets/pictures/horseLogo.jpg"
              alt="logo-pic"
              width={100}
              height={100}
              className="w-[40px] rounded-3xl"
            />
            <span className="ml-3 text-xl text-white">My Portfolio</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="#" className="mr-5 hover:underline text-white">
              Home
            </Link>
            <Link href="#about" className="mr-5 hover:underline text-white">
              About
            </Link>
            <Link href="#skills" className="mr-5 hover:underline text-white">
              Skills
            </Link>
            <Link href="#projects" className="mr-5 hover:underline text-white">
              Projects
            </Link>
            <Link href="#contact" className="mr-5 hover:underline text-white">
              Contact
            </Link>
          </nav>
          <a href="/assets/CV/My-Cv.PNG" download>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2 " />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}
