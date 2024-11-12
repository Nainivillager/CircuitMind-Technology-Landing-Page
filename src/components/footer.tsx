import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Clock,
  ArrowRight,
  Send
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://www.facebook.com/people/CircuitMind-Technology/61558604498392/',
      label: 'Facebook',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/circuitmind_technology/',
      label: 'Instagram',
      hoverColor: 'hover:bg-pink-600'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/circuitmind-technology/',
      label: 'LinkedIn',
      hoverColor: 'hover:bg-red-600'
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: 'https://www.youtube.com/@circuitmindtechnology',
      label: 'Youtube',
      hoverColor: 'hover:bg-red-600'
    }
  ];

  const quickLinks = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about' },
    { text: 'Store', href: '/store' },
    { text: 'Gallery', href: '/gallery' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      content: '+91 620 390 5950',
      href: 'tel:+916203905950'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      content: 'circuitmindtechnology@gmail.com',
      href: 'mailto:circuitmindtechnology@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      content: 'c-112, H59, Cloud 24, Noida Sector 63, Uttar Pradesh',
      href: 'https://maps.app.goo.gl/ELDWq5TsrRm8T2Wr6'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      href: 'https://maps.app.goo.gl/ELDWq5TsrRm8T2Wr6'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info & Description */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">Your Company</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Delivering excellence in technology solutions and innovative
              services to empower your digital journey.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-full bg-gray-800 ${social.hoverColor} transition-colors duration-300`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <div className="flex-shrink-0 bg-gray-800 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.content}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
                <button
                  type="submit"
                  title="send-btn"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
