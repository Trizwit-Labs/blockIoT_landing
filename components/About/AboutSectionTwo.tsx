// import Image from "next/image";
// import SectionTitle from "../Common/SectionTitle";

// const AboutSectionTwo = () => {
//   return (
//     <section id="about2"className="py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap items-center">
//           <div className="w-full px-4 lg:w-1/2">
//             <div
//               className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
//               data-wow-delay=".15s"
//             > 
              
//               {/* <Image
//                 src="/images/about/about-img.jpeg"
//                 alt="about-image"
//                 fill
//                 className="mx-auto max-w-full lg:mr-0 object-cover object-center rounded-md"
//               /> */}
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-1/2">
//             <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
//             <SectionTitle
//                 title="Features"
//                 paragraph=""
//                 mb="44px"
//               />
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                 Managed IoT backend hosting
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                 You can effortlessly host your IoT backend with a single click, 
//                 choosing between a dedicated or shared hosting plan.
//                 </p>
//               </div>
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                 Inbuilt database
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                 The platform comes with a reliable 
//                 inbuilt database that you can use to store your IoT data.
//                 </p>
//               </div>
//               <div className="mb-1">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                 Open-source communication protocols
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                 Block IoT supports open-source protocols like MQTT, 
//                 CoAP, and more for secure and efficient IoT communication.
//                 </p>
//               </div>
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                 Analytics tools integration
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                 You can quickly integrate analytics tools into your IoT backend 
//                 with just one click, giving you valuable insights into your IoT data.
//                 </p>
//               </div>
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                 Hardware support
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                 Block IoT provides open-source libraries for all hardware and IoT frameworks, ensuring compatibility with 
//                 most IoT devices. It also includes OTA support and security features.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="-mx-4 flex flex-wrap items-center">
//           <div className="w-full px-4 lg:w-1/2">
//             <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                 Easy scaling
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                 You can easily scale your IoT backend, 
//                 device numbers, and database as your needs change and grow.
//                 </p>
//               </div>
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                 Inbuilt dashboard hosting
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                 Block IoT supports hosting for your IoT dashboard and provides 
//                 support for popular frameworks like React and Next.js.
//                 </p>
//               </div>
//               <div className="mb-1">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                 Blended No-code & Full code solution
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                 You can choose the level of no-code and full code development that best suits your needs, ranging from
//                  20% no-code and 80% full code to 80% no-code and 20% full code.
//                 </p>
//               </div>
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                 One-click migration
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                 You can migrate to your own server with just one
//                  click, ensuring seamless transitions.
//                 </p>
//               </div>
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                 Multiple dashboard themes
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                 You can choose from multiple dashboard themes, including an Electric Vehicle dashboard and a Home Automation dashboard,
//                  to customize your IoT dashboard to your preferences.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* <div className="w-full px-4 lg:w-1/2">
//             <div
//               className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
//               data-wow-delay=".15s"
//             > 
              
//               <Image
//                 src="/images/about/about-img.jpeg"
//                 alt="about-image"
//                 fill
//                 className="mx-auto max-w-full lg:mr-0 object-cover object-center rounded-md"
//               />
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSectionTwo;
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
      {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Features</h1> */}
      <SectionTitle
            title="Features"
            paragraph=""
            center
          />
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" p-6 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
  <img src="/images/about/backend.png" alt="Icon" className="w-14 h-14"/>
</div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-[#05BFDB] " >Managed IoT backend hosting</h2>
          <p className="leading-relaxed text-base ">You can effortlessly host your IoT backend with a single click, 
                choosing between a dedicated or shared hosting plan.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
  <img src="/images/about/data.png" alt="Icon" className="w-14 h-14"/>
</div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-[#05BFDB] " >Inbuilt database</h2>
          <p className="leading-relaxed text-base ">The platform comes with a reliable 
                inbuilt database that you can use to store your IoT data.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
  <img src="/images/about/chat.png" alt="Icon" className="w-14 h-14"/>
</div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-[#05BFDB] " >Open-source communication protocols</h2>
          <p className="leading-relaxed text-base ">Block IoT supports open-source protocols like MQTT, 
                CoAP, and more for secure and efficient IoT communication.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
  <img src="/images/about/analytics.png" alt="Icon" className="w-14 h-14"/>
</div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-[#05BFDB] " >Analytics tools integration</h2>
          <p className="leading-relaxed text-base ">You can quickly integrate analytics tools into your IoT backend 
                with just one click, giving you valuable insights into your IoT data.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
  <img src="/images/about/hw.png" alt="Icon" className="w-14 h-14"/>
</div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-[#05BFDB] " >Hardware support</h2>
          <p className="leading-relaxed text-base ">Block IoT provides open-source libraries for all hardware and IoT frameworks, ensuring compatibility with 
                most IoT devices. It also includes OTA support and security features.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
  <img src="/images/about/scl.png" alt="Icon" className="w-14 h-14"/>
</div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-[#05BFDB] "> Easy scaling</h2>
          <p className="leading-relaxed text-base ">You can easily scale your IoT backend, 
                device numbers, and database as your needs change and grow.</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
  <img src="/images/about/dash.png" alt="Icon" className="w-14 h-14"/>
</div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-[#05BFDB] ">Inbuilt dashboard hosting</h2>
          <p className="leading-relaxed text-base ">Block IoT supports hosting for your IoT dashboard and provides 
                support for popular frameworks like React and Next.js.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
  <img src="/images/about/nocode.png" alt="Icon" className="w-14 h-14"/>
</div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-[#05BFDB] ">Blended No-code & Full code solution</h2>
          <p className="leading-relaxed text-base ">You can choose the level of no-code and full code development that best suits your needs, ranging from
                 20% no-code and 80% full code to 80% no-code and 20% full code.</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" p-6 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
  <img src="/images/about/migr.png" alt="Icon" className="w-14 h-14"/>
</div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-[#05BFDB] ">One-click migration</h2>
          <p className="leading-relaxed text-base ">You can migrate to your own server with just one
                 click, ensuring seamless transitions.</p>
        </div>
      </div>

  
  <div className="xl:w-1/3 md:w-1/2 p-4">
    <div className="p-6">
      <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        <img src="/images/about/multiple.png" alt="Icon" className="w-14 h-14" />
      </div>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-[#05BFDB]">Multiple dashboard themes</h2>
      <p className="leading-relaxed text-base">You can choose from multiple dashboard themes, including an Electric Vehicle dashboard and a Home Automation dashboard, to customize your IoT dashboard to your preferences.</p>
    </div>
  </div>


    </div>
   
  </div>
</section>


  );
};

export default AboutSectionTwo;

