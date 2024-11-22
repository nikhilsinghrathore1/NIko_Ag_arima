
const Test: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Landing Section */}
      <header className="landing min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black opacity-70"></div>
        <div className="z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg mb-6">
            Crafting excellence with innovation and technology.
          </p>
          <a
            href="#work"
            className="px-6 py-3 bg-white text-black rounded-md shadow hover:bg-gray-300"
          >
            Explore Our Work
          </a>
        </div>
      </header>

      {/* Our Work Section */}
      <section id="work" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Work</h2>
        <p className="text-center max-w-2xl mx-auto mb-10">
          Take a look at some of the projects we’ve proudly delivered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded shadow text-center">Project 1</div>
          <div className="bg-gray-800 p-6 rounded shadow text-center">Project 2</div>
          <div className="bg-gray-800 p-6 rounded shadow text-center">Project 3</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <blockquote className="bg-gray-800 p-6 rounded shadow">
            <p className="mb-4">
              "This platform transformed our workflow and elevated our results!"
            </p>
            <footer>- Client A</footer>
          </blockquote>
          <blockquote className="bg-gray-800 p-6 rounded shadow">
            <p className="mb-4">
              "Absolutely brilliant. The team is amazing and highly creative."
            </p>
            <footer>- Client B</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded shadow hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-500">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Test;
