import React from 'react';
import coffee from '../assets/Images/coffee-abt.jpg'
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Us
        </h1>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={coffee}
              alt="Our Team"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-600 text-2xl pt-9">
              To all coffe and starbucks lover: this little app was made with love for you and whoever you know 
              that might want to recreate some of starbucks' famous recipe t home while savng yourself the wait - line and trip to the store. 
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;