import React from "react";
import DevelopmentProcess from "../miniComponents/developmentProcess";
import WhyChooseUs from "../miniComponents/whyChooseUs";

function AboutPage() {
  return (
    <>
      <div className="flex items-center justify-center min-h-[80vh] mt-16 mx-auto px-4 w-full max-w-[70%]">
        <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
          {/* Logo Section */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <img
              src="/assets/images/logo/deal-done.jpg"
              alt="Deal-done Logo"
              className="h-auto max-h-[50vh] object-contain mx-auto lg:mx-0"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center text-center lg:text-left w-full">
            <p className="text-blue-600 uppercase font-bold mb-2">About Us</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Choosing the Right IT Partner
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Dexterz Sol, we believe in more than just delivering IT
              services; we build solutions that drive real business growth. Our
              team is dedicated to transforming your vision into innovative and
              impactful software that meets your unique needs.
            </p>
            <div className="space-y-6">
              {/* Business Growth */}
              <div className="flex flex-col sm:flex-row items-start">
                <img
                  src="/assets/images/logo/growth-icon.png"
                  alt="Growth Icon"
                  className="h-auto max-h-10 mx-auto sm:mx-0"
                />
                <div className="sm:ml-5 mt-4 sm:mt-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Business Growth
                  </h3>
                  <p className="text-gray-600">
                    With our expertise and commitment to excellence, we empower
                    businesses to scale and achieve their goals through tailored
                    software solutions.
                  </p>
                </div>
              </div>
              {/* Technology Consultancy */}
              <div className="flex flex-col sm:flex-row items-start">
                <img
                  src="/assets/images/logo/technology-icon.png"
                  alt="Technology Icon"
                  className="h-auto max-h-10 mx-auto sm:mx-0"
                />
                <div className="sm:ml-5 mt-4 sm:mt-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Technology Consultancy
                  </h3>
                  <p className="text-gray-600">
                    Our consultancy services provide you with strategic insights
                    and cutting-edge technology advice, ensuring your business
                    stays ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <DevelopmentProcess />
    </>
  );
}

export default AboutPage;
