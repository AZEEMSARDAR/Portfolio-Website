import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -mt-[5rem]">
            {/* Skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center  bg-orange-500 text-white flex-shrink-0">  */}
                  <IoLogoHtml5 className="text-3xl text-orange-500 font-bold"/>
                  {/* </div> */}
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">100%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center  bg-orange-500 text-white flex-shrink-0">  */}
                  <IoLogoCss3  className="text-3xl text-blue-500 font-bold"/>
                  {/* </div> */}
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">90%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center  bg-orange-500 text-white flex-shrink-0">  */}
                  <TbBrandJavascript className="text-3xl text-yellow-500 font-bold"/>
                  {/* </div> */}
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JAVASCRIPT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">80%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center  bg-orange-500 text-white flex-shrink-0">  */}
                  <BiLogoTypescript className="text-3xl text-blue-500 font-bold"/>
                  {/* </div> */}
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TYPESCRIPT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">80%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center  bg-orange-500 text-white flex-shrink-0">  */}
                  <FaReact className="text-3xl text-sky-600 font-bold"/>
                  {/* </div> */}
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    React
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[60%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">60%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center  bg-orange-500 text-white flex-shrink-0">  */}
                  <TbBrandNextjs className="text-3xl text-white-500 font-bold"/>
                  {/* </div> */}
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next.js
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[60%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
