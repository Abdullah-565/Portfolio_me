// "use client"
import Image from "next/image"
import Link from "next/link"
const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font bg-[#424769]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-white">
       My <span className="text-[#000021]">Projects</span>
      </h1>
     
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 sm:w-1/2 p-4 ">
        <div className="flex relative">
          <Image
            alt="portfolio"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/Portfolio.PNG")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-[#000021] opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
              Portfolio
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Portfolio Website
            </h1>
            <p className="leading-relaxed">
              This is the simple Portfolio website using HTML, CSS and Javascript.
            </p>
            <Link href={"https://abdullah-azhar-portfolio.vercel.app/"} target="_blank ">
            <p className="leading-relaxed text-blue-500">
              View Project...
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4 " >
        <div className="flex relative">
          <Image
            alt="clone"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/Microsoft.PNG")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-[#000021] opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
              Clone
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Microsoft Clone
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the fully responsive Microsoft Clone using HTML and Tailwind CSS. 
            </p>
            <Link href={"https://microsoft-blue.vercel.app/"} target="_blank ">
            <p className="leading-relaxed text-blue-500">
              View Project...
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="facebook"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/Facebook.PNG")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-[#000021] opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
              Clone
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Facebook Clone
            </h1>
            <p className="leading-relaxed">
              This is the Facebook Clone using HTML and Tailwind CSS. 
            </p>
            <Link href={"https://facebook-clone-iota-gules.vercel.app/"} target="_blank ">
            <p className="leading-relaxed text-blue-500">
              View Project...
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/Clock.PNG")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-[#000021] opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
              Clock
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Digital Clock
            </h1>
            <p className="leading-relaxed">
              This is the Digital Clock using HTMl, CSS and Javascript.
            </p>
            <Link href={"https://digital-clock-chi-kohl.vercel.app/index2.html"} target="_blank ">
            <p className="leading-relaxed text-blue-500">
              View Project...
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
