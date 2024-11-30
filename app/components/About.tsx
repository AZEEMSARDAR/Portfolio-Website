import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-full mx-auto h-[300] w-[300]"
              alt="hero"
              src="/assets/pictures/profile-pic (2).png"
              width={300}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me 
            </h1>
            <p className="mb-5 leading-relaxed">
              Hi I&apos;m Sardar Azeem Ali, a passionate frontend web developer skilled in HTML, CSS, JavaScript, React, and Next.js. 
              I specialize in building responsive and dynamic websites with a focus on clean design and seamless user experiences. 
              With a strong commitment to continuous learning, I enjoy creating innovative web solutions that bring ideas to life.
            </p>
            <div className="flex justify-center">
                <Link target="_blank" href="https://hakathon-milestone-01-pi.vercel.app/">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                View CV
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
