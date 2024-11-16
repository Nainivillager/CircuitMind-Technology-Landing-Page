import React from 'react';
import { Mail, Phone, MapPin, LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  value: string;
  bgColor: string;
  textColor: string;
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  description,
  value,
  bgColor,
  textColor,
  onClick
}) => (
  <div
    onClick={onClick}
    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
  >
    <div
      className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300`}
    >
      <Icon className={`${textColor} w-8 h-8`} />
    </div>
    <h3 className="font-bold text-xl mb-3 text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 text-center mb-3 text-lg">{description}</p>
    <p
      className={`${textColor} font-semibold text-center text-lg tracking-wide group-hover:scale-105 transform transition-all duration-300`}
    >
      {value}
    </p>
  </div>
);

const Contact: React.FC = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+916203905950';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:circuitmindtechnology@gmail.com';
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/ELDWq5TsrRm8T2Wr6', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-0 sm:p-8 my-4 sm:my-8 mx-2 sm:mx-8 rounded-lg">
      <div className="max-w-6xl mx-auto">
        {/* Header Section with enhanced animation */}
        <div className="text-center mb-16 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
          <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            <ContactCard
              icon={Phone}
              title="Call Us"
              description="Talk to our friendly team"
              value="+91 620 390 5950"
              bgColor="bg-blue-100"
              textColor="text-blue-600"
              onClick={handlePhoneClick}
            />
          </div>

          <div className="opacity-0 break-words animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
            <ContactCard
              icon={Mail}
              title="Email Us"
              description="24/7 Response Time"
              value="circuitmindtechnology@gmail.com"
              bgColor="bg-green-100"
              textColor="text-green-600"
              onClick={handleEmailClick}
            />
          </div>

          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_0.6s_forwards]">
            <ContactCard
              icon={MapPin}
              title="Visit Us"
              description="Come say hello"
              value="Circuit Mind Technology"
              bgColor="bg-purple-100"
              textColor="text-purple-600"
              onClick={handleMapClick}
            />
          </div>
        </div>

        {/* Contact Form Section with stagger animation */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
            Send us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="Hem"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="Joshi"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                placeholder="hem@x.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg h-40 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
