import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gray-500">
      <footer className="body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/assets/pictures/horseLogo.jpg"
              alt="logo-pic"
              width={100}
              height={100}
              className="w-[40px] rounded-3xl ml-2"
            />
            <span className="ml-3 text-2xl">Sardar Azeem</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 All Rights Reserved — Sardar Azeem
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/s-azeem-ali-khan-509175330/"
              className="text-gray-500"
            >
              <FaLinkedinIn className="text-2xl text-white hover:text-[#0039a6]" />
            </Link>
            <Link target="_blank" href="https://github.com/AZEEMSARDAR" className="ml-3 text-gray-500">
              <FaGithub  className="text-2xl text-white mr-4" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
