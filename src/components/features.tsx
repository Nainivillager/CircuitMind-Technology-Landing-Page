// import {
//   Cpu,
//   Glasses,
//   Radio,
//   Wrench,
//   Box,
//   GraduationCap,
//   ArrowRight
// } from 'lucide-react';

// export default function Features() {
//   const features = [
//     {
//       icon: <Cpu className="w-12 h-12 text-teal-600" />,
//       title: 'Robotics Lab Setup',
//       description:
//         'State-of-the-art laboratory facilities equipped with advanced robotics tools, programming interfaces, and hands-on learning stations. Perfect for practical experimentation and project development.',
//       learnMore: 'Explore Lab Features'
//     },
//     {
//       icon: <Glasses className="w-12 h-12 text-teal-600" />,
//       title: 'AR/VR Lab Setup',
//       description:
//         'Immersive learning environments featuring cutting-edge AR/VR technology. Students experience virtual simulations and interactive 3D modeling for enhanced understanding of complex concepts.',
//       learnMore: 'View AR/VR Setup'
//     },
//     {
//       icon: <Radio className="w-12 h-12 text-teal-600" />,
//       title: 'IoT Lab Setup',
//       description:
//         'Comprehensive IoT laboratory with sensors, microcontrollers, and networking equipment. Enable students to build smart solutions and understand connected device ecosystems.',
//       learnMore: 'Discover IoT Lab'
//     },
//     {
//       icon: <Wrench className="w-12 h-12 text-teal-600" />,
//       title: 'Workshops',
//       description:
//         'Hands-on workshops conducted by industry experts covering robotics, AI, and innovation. Regular practical sessions to build real-world projects and develop technical expertise.',
//       learnMore: 'Browse Workshops'
//     },
//     {
//       icon: <Box className="w-12 h-12 text-teal-600" />,
//       title: 'Robotics Kits & LEGO Kits',
//       description:
//         'Educational kits featuring programmable robots, sensors, and LEGO Mindstorms. Custom-designed packages for different skill levels to ensure engaging, interactive learning experiences.',
//       learnMore: 'View Kits'
//     },
//     {
//       icon: <GraduationCap className="w-12 h-12 text-teal-600" />,
//       title: 'Certification Programs',
//       description:
//         'Industry-recognized certification courses in robotics and automation. Structured curriculum combining theoretical knowledge with practical implementation.',
//       learnMore: 'See Certifications'
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-teal-50/30">
//       <div className="max-w-7xl mx-auto px-4 py-20">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Advanced Training Solutions
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Equip your students with cutting-edge technology and hands-on
//             experience in robotics, AR/VR, and IoT
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group relative"
//             >
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//               <div className="p-8">
//                 <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   {feature.description}
//                 </p>
//                 <div className="flex items-center text-teal-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-teal-700">
//                   <span>{feature.learnMore}</span>
//                   <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
//                 </div>
//               </div>
//               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import {
  Cpu,
  MonitorPlay,
  Radio,
  Wrench,
  Box,
  GraduationCap,
  ChevronRight
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      bgClass: 'bg-gradient-to-br from-blue-600 to-blue-500',
      title: 'Robotics Lab Setup',
      description:
        'Advanced robotics lab with programming interfaces and hands-on learning stations for practical experimentation.',
      learnMore: 'Explore Lab'
    },
    {
      icon: <MonitorPlay className="w-6 h-6 text-white" />,
      bgClass: 'bg-gradient-to-br from-blue-500 to-blue-400',
      title: 'AR/VR Lab Setup',
      description:
        'Immersive AR/VR environments featuring virtual simulations and interactive 3D modeling for enhanced learning.',
      learnMore: 'View Setup'
    },
    {
      icon: <Radio className="w-6 h-6 text-white" />,
      bgClass: 'bg-gradient-to-br from-blue-600 to-blue-500',
      title: 'IoT Lab Setup',
      description:
        'Complete IoT lab with sensors, microcontrollers, and networking equipment for building smart solutions.',
      learnMore: 'Learn More'
    },
    {
      icon: <Wrench className="w-6 h-6 text-white" />,
      bgClass: 'bg-gradient-to-br from-blue-500 to-blue-400',
      title: 'Workshops',
      description:
        'Expert-led workshops on robotics, AI, and innovation with hands-on project development sessions.',
      learnMore: 'View Schedule'
    },
    {
      icon: <Box className="w-6 h-6 text-white" />,
      bgClass: 'bg-gradient-to-br from-blue-600 to-blue-500',
      title: 'Robotics Kits',
      description:
        'Educational kits with programmable robots, sensors, and LEGO Mindstorms for interactive learning.',
      learnMore: 'Browse Kits'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      bgClass: 'bg-gradient-to-br from-blue-500 to-blue-400',
      title: 'Certifications',
      description:
        'Industry-recognized certification courses combining theoretical knowledge with practical implementation.',
      learnMore: 'Get Certified'
    }
  ];

  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Advanced Training Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Cutting-edge technology training in robotics, AR/VR, and IoT
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer border border-slate-100"
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg ${feature.bgClass} shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                >
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-600 text-sm font-medium opacity-80 group-hover:opacity-100">
                    <span>{feature.learnMore}</span>
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
