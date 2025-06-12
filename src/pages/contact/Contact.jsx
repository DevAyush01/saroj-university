import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Building2,
  User,
  MessageCircle,
  Send,
} from "lucide-react";
import Layout from '../../components/Layout'

const Contact = () => {
  return (
    <Layout>
    <div className="bg-gray-50 min-h-screen py-36 md:py-48 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Details */}
        <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-blue-800">Contact Information</h2>

          <div className="text-gray-700 space-y-4 text-sm">
            <div>
              <p className="font-semibold">Under the aegis of</p>
              <p><strong>Smt. Saroj Singh Shikshan Sansthan</strong></p>
              <p>(A Society registered under the Societies Registration Act 1860)</p>
              <p>Registration No: 1-129470</p>
              <p>8 Mall Avenue, Lucknow</p>
            </div>

            <div>
              <h3 className="font-semibold text-md mt-4">Saroj International University, Uttar Pradesh</h3>
              <p><MapPin className="inline-block w-4 h-4 mr-1" /> 12th Km, Stone Sultanpur Road, Chand Sarai, Gosaiganj, Lucknow, UP 226022</p>
              <p>(In Lucknow Development Area)</p>
              <p><Phone className="inline-block w-4 h-4 mr-1" /> +91 00000 00000</p>
              <p><Mail className="inline-block w-4 h-4 mr-1" /> info@sarojuniversity.in</p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://www.google.com/maps/place/Saroj+Institute+of+Technology"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              <MapPin className="mr-2 h-4 w-4" />
              View on Map
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-blue-800">Get In Touch</h2>

          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="relative w-full">
                <User className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="First Name *"
                  className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="relative w-full">
                <Mail className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Phone Number *"
                className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <textarea
                rows="4"
                maxLength={180}
                placeholder="Message"
                className="pl-10 pr-4 py-2 border w-full rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <div className="text-right text-xs text-gray-400 mt-1">0 / 180</div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
        <iframe
     src ="https://maps.google.com/maps?q=Saroj%20Institute%20of%20Technology%20and%20Management&t=m&z=10&output=embed&iwloc=near"   width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Saroj Institute Map"
        ></iframe>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;
