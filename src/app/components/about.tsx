import Image from "next/image"


const About = () => {
  return (
    <div id="About">
        <section className="text-gray-600 body-font bg-[#424769]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../../public/assets/about.png")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        <span className="text-[#aa76db]">About</span> Me
        <br className="hidden lg:inline-block" />
        
      </h1>
      <p className="mb-8 leading-relaxed text-white sm:line-clamp-2 md:line-clamp-none lg:line-clamp-none">
      As a BSCS student at Szabist University, I am passionate about web development, constantly honing my skills to create innovative and user-friendly digital experiences. With a keen interest in front-end and back-end technologies, I strive to merge creativity with functionality in every project I undertake.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#aa76db] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button>
        
      </div>
    </div>
  </div>
</section>

      
    </div>
  )
}

export default About
