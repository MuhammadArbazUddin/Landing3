import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-[#1a1a19]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className=" p-8">
          {submitted && (
            <div className="mb-4 text-green-600 text-center">
              Thank you for your message!
            </div>
          )}
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-white font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2  rounded-lg border border-[#362c52] focus:outline-none text-[#362c52]"
              required
            />
          </div>
          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full px-4 py-2  rounded-lg border border-[#362c52] focus:outline-none text-[#362c52]"
              required
            />
          </div>
          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-white font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              className="w-full px-4 py-2  rounded-lg border border-[#362c52] focus:outline-none text-[#362c52]"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button className="px-6 py-2 bg-[#362c52] rounded-lg font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
