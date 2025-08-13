import React from "react";

const FreelanceServices = () => {
  return (
    <section id="freelance-services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Freelance Web Development Services
        </h2>

        {/* Pricing Tiers - realistic for your skill level */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Starter */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <p className="text-4xl font-bold mb-4">$150</p>
            <ul className="mb-6 text-gray-600 space-y-2">
              <li>1–2 page static website</li>
              <li>Responsive design</li>
              <li>Deployed to Netlify</li>
            </ul>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
            >
              Get Started
            </a>
          </div>

          {/* Business */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center border-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4">Business</h3>
            <p className="text-4xl font-bold mb-4">$300</p>
            <ul className="mb-6 text-gray-600 space-y-2">
              <li>Up to 5 pages</li>
              <li>Contact form integration</li>
              <li>Basic SEO setup</li>
              <li>Hosting setup</li>
            </ul>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
            >
              Get Started
            </a>
          </div>

          {/* Premium */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-4">$600+</p>
            <ul className="mb-6 text-gray-600 space-y-2">
              <li>Custom full-stack application</li>
              <li>Authentication (login/register)</li>
              <li>Database integration</li>
              <li>Advanced features (API, dashboards)</li>
            </ul>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Testimonials Placeholder */}
        <h3 className="text-2xl font-semibold text-center mb-6">
          What Clients Say
        </h3>
        <div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-500">
          <p>✨ Testimonials coming soon ✨</p>
        </div>
      </div>
    </section>
  );
};

export default FreelanceServices;
