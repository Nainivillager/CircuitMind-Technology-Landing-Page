import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Clock
} from 'lucide-react';

// ContactInfo in Footer Section
export const contactInfo = [
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
    content:
      'First Floor (C112-13), Building H-59, Sector 63, Noida (UP)-201305',
    href: 'https://maps.app.goo.gl/ELDWq5TsrRm8T2Wr6'
  },
  {
    icon: <Clock className="w-5 h-5" />,
    content: 'Mon - Fri: 9:00 AM - 6:00 PM',
    href: 'https://maps.app.goo.gl/ELDWq5TsrRm8T2Wr6'
  }
];

// socialLinks in Footer Section
export const socialLinks = [
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
