import { Phone, Mail, MessageCircle } from 'lucide-react';
export default function ooter() {
  const contactOptions = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      description: 'Speak directly with Us',
      buttonText: 'Call Now',
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      href: 'tel:+916203905950'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      description: 'Chat with us on WhatsApp',
      buttonText: 'Message Us',
      bgColor: 'bg-emerald-600',
      hoverColor: 'hover:bg-emerald-700',
      href: 'https://api.whatsapp.com/send?phone=+916203905950'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      description: 'Send us your queries',
      buttonText: 'Email Us',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      href: 'mailto:circuitmind_technology@gmail.com'
    }
  ];

  return (
    <div>
      <div className="bg-gray-800 text-white py-16 px-4 rounded-t-lg mx-4 my-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us!</h2>
          <p className="text-xl text-center mb-12 opacity-90">
            Choose your preferred way to connect with us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-400 mb-4">{option.description}</p>
                <button
                  className={`w-full ${option.bgColor} ${option.hoverColor} text-white px-6 py-2 rounded-lg font-semibold transition-colors `}
                >
                  <a
                    className="flex items-center justify-center gap-2"
                    href={option.href}
                  >
                    {option.icon}
                    {option.buttonText}
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
