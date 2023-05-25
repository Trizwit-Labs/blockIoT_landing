


import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        
        <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src="images/video/globe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="container relative">
          <div className="mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-36 text-3xl font-bold leading-tight text-black dark:text-[#00FFCA] sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Revolutionize Your IoT Development with BlockIoT
                </h1>
                <p className="mb-8 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  "Say goodbye to the hassle of hosting and running IoT servers. With our powerful backend services, you can focus on developing cutting-edge IoT products that will transform your industry."
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {/* <Link
                    href="scrollTo()"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Know More
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;