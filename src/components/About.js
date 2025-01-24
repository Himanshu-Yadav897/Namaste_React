import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Welcome to <span className="font-semibold text-indigo-500">TastyFud</span> – your go-to food delivery app for delicious meals, quick deliveries, and unforgettable dining experiences! 
          Our mission is to bring your favorite dishes from the best local restaurants straight to your doorstep. 
          Whether you're craving comfort food, trying something new, or celebrating a special moment, we're here to serve you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Wide Selection</h3>
            <p className="text-gray-600">
              Explore a wide range of cuisines from the top-rated restaurants in your area.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast Delivery</h3>
            <p className="text-gray-600">
              Enjoy fast and reliable delivery so your food arrives fresh and hot.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Service</h3>
            <p className="text-gray-600">
              We pride ourselves on exceptional customer service and seamless ordering experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
