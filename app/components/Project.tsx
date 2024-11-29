import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have built dynamic and responsive projects using HTML,
            CSS, JavaScript, React, and Next.js, focusing on 
            user friendly designs, reusable components, and seamless
            performance across all devices
            </p>
          </div>
          <div className="flex flex-wrap -m-5 -mt-12">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="ecommerce web"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/pictures/ecommerce-web.PNG"    
                  width={200}
                  height={200}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Ecommerce Web
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Project
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Built a responsive e-commerce website with Next.js, featuring dynamic products, seamless navigation, and a userfriendly design
                  </p>
                  <Link target="_blank" href="https://ecommerce-web-sable.vercel.app/">
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project..
                  </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="ecommerce web"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/pictures/Resume-CV.PNG"  // Picture ka data fill krna hai 
                  width={200}
                  height={200}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Personal Resume
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Project
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Developed a personal resume using Next.js, featuring a modern design, responsive layout to showcase skills and achievements effectively
                  </p>
                  <Link target="_blank" href="https://hakathon-milestone-01-pi.vercel.app/">
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project..
                  </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Calculator App Pic"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/pictures/Calculator.PNG"   // Picture ka data fill krna hai 
                  width={200}
                  height={200}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Ecommerce Web
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Project
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Created a fully functional calculator app using HTML, CSS, and JavaScript, featuring a clean design and seamless user interaction for basic arithmetic operations
                  </p>
                  <Link target="_blank" href="https://calculator-app-swart-nine.vercel.app/">
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project..
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
