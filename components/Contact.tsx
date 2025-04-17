"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-850">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-gray-800 rounded-lg text-white border border-gray-700 focus:border-teal-500 outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-800 rounded-lg text-white border border-gray-700 focus:border-teal-500 outline-none"
              placeholder="Your Email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              className="w-full p-3 bg-gray-800 rounded-lg text-white border border-gray-700 focus:border-teal-500 outline-none"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            className="mt-6 w-full px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105"
            onClick={() => alert('Form submission is a demo. Contact Kelvin via email!')}
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}