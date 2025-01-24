import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  
    
   
    setFormData({ name: "", email: "", message: "" });
    
   
    setSuccessMessage("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          We'd love to hear from you! Whether you have a question, feedback, or just want to get in touch, feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Your name"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Your email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              rows="6"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-600"
            >
              Send Message
            </button>
          </div>
        </form>

        
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
