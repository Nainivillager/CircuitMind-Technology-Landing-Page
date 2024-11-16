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

// Offering Section Data
export const data = [
  {
    img: 'school.webp',
    heading: 'Empowering School Students with Cutting-Edge Technology',
    subheading:
      'Innovative labs designed to equip Young Minds with essential skills in robotics and smart technologies',
    offerings: [
      {
        head: 'Robotics and AI',
        discription:
          'Equip students with skills to design, build, and program robots and AI systems.'
      },
      {
        head: 'IoT Lab',
        discription:
          'Introduce students to smart technologies, enabling them to create connected devices.'
      },
      {
        head: 'AR/VR Lab',
        discription:
          'Bring immersive technologies to classrooms with cutting-edge AR/VR setups.'
      },
      {
        head: 'Robotics in Curriculum',
        discription:
          'Integrate robotics into regular lessons, enhancing STEM education.'
      }
    ]
  },
  {
    img: 'kidsLeaninwith.webp',
    heading: 'Advanced Technological Training for College Students',
    subheading:
      'Specialized labs for Future Innovators to master advanced robotics, IoT, data science, and cybersecurity skills.',
    offerings: [
      {
        head: 'Advanced Robotics & AI',
        discription:
          'Advanced skills for designing, building, and programming complex robots and AI systems.'
      },
      {
        head: 'Smart IoT Solutions',
        discription:
          'In-depth exploration of smart technologies and creating connected devices for practical applications.'
      },
      {
        head: 'Robotics Workshops',
        discription:
          'Hands-on workshops for college students, focusing on real-world problem-solving.'
      },

      {
        head: 'Robotics in Curriculum',
        discription:
          'Embed robotics into college courses to prepare students for the tech-driven job market.'
      }
    ]
  },
  {
    img: 'projectAsistance.webp',
    heading: 'Personalized Robotics Trainig',
    subheading: 'Robotics is now available at your Doorstemps!',
    offerings: [
      {
        head: 'Robotics Delivered at your Home',
        discription:
          'We offer personalized robotics training for students in classes 6-12, ensuring tailored learning experiences that ignite curiosity and innovation. '
      },
      {
        head: 'Hands On Experience',
        discription:
          ' Our hands-on approach helps young minds grasp complex concepts, build functional robots, and develop critical thinking skills. '
      },
      {
        head: 'Electronics For Everyone ',
        discription:
          'Whether you are working on a school project or a personal endeavor, our support ensures you achieve your goals with ease. '
      },
      {
        head: 'Project Assistance at your Doorstep',
        discription:
          'We offer doorstep project assistance for electronics projects, bringing expert guidance directly to you. '
      }
    ]
  }
];

export const marqueData = [
  {
    image: 'Clogo.webp',
    alt: 'company1 logo'
  },
  {
    image: 'Clogo.webp',
    alt: 'company2 logo'
  },
  {
    image: 'Clogo.webp',
    alt: 'company3 logo'
  },
  {
    image: 'Clogo.webp',
    alt: 'company4 logo'
  }
];
