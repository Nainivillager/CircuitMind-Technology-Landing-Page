// export default function Features() {
//   const data = [
//     {
//       img: 'vite.svg',
//       heading: 'Empowering Young Minds with Cutting-Edge Technology',
//       subheading:
//         'Innovative labs designed to equip school students with essential skills in robotics and smart technologies',
//       offerings: [
//         {
//           head1: 'Robotics and AI',
//           discription1:
//             'Equip students with skills to design, build, and program robots and AI systems.'
//         },
//         {
//           head2: 'IoT Lab',
//           discription2:
//             'Introduce students to smart technologies, enabling them to create connected devices.'
//         },
//         {
//           head3: 'AR/VR Lab',
//           discripion3:
//             'Bring immersive technologies to classrooms with cutting-edge AR/VR setups.'
//         }
//       ]
//     },
//     {
//       img: 'vite.svg',
//       heading: 'Advanced Technological Training for Future Innovators',
//       subheading:
//         'Specialized labs for college students to master advanced robotics, IoT, data science, and cybersecurity skills.',
//       offerings: [
//         {
//           head1: 'Advanced Robotics & AI',
//           discription1:
//             'Advanced skills for designing, building, and programming complex robots and AI systems.'
//         },
//         {
//           head2: 'Smart IoT Solutions',
//           discription2:
//             'In-depth exploration of smart technologies and creating connected devices for practical applications.'
//         },
//         {
//           head3: 'Robotics Workshops',
//           discripion3:
//             'Hands-on workshops for college students, focusing on real-world problem-solving.'
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="text-center ">
//       <div>
//         <h1 className="text-4xl px-4 font-bold">Want to know What we Offer!</h1>
//         <h3 className="text-xl px-4"></h3>
//       </div>

//       {data.map((val, idx) => (
//         <div
//           key={idx}
//           className={`flex flex-col mx-8 ${
//             idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//           } items-center gap-8 py-6`}
//         >
//           {/* Image Container */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             <img
//               src={val.img}
//               alt="img"
//               className="rounded-lg w-full h-auto object-cover shadow-lg"
//             />
//           </div>

//           {/* Content Container */}
//           <div className="w-full md:w-1/2 px-4">
//             <h2 className="text-xl font-bold py-2">{val.heading}</h2>
//             <p className="text-gray-700 mb-3">{val.subheading}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

interface OfferingCardProps {
  heading: string;
  description: string;
}

const OfferingCard = ({ heading, description }: OfferingCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-lg font-semibold mb-2 text-indigo-600">{heading}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function Features() {
  const data = [
    {
      img: 'vite.svg',
      heading: 'Empowering Young Minds with Cutting-Edge Technology',
      subheading:
        'Innovative labs designed to equip School Students  with essential skills in robotics and smart technologies',
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
      img: 'vite.svg',
      heading: 'Advanced Technological Training for Future Innovators',
      subheading:
        'Specialized labs for College Students  to master advanced robotics, IoT, data science, and cybersecurity skills.',
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
    }
  ];

  return (
    <div className="text-center py-12">
      <div>
        <h1 className="text-4xl px-4 font-bold mb-12">
          Want to know What we Offer!
        </h1>
      </div>

      {data.map((val, idx) => (
        <div
          key={idx}
          className={`flex flex-col mx-8 ${
            idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center gap-8 py-12`}
        >
          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={val.img}
              alt="img"
              className="rounded-lg w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Content Container with Offerings Cards */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="px-4">
              <h2 className="text-2xl font-bold mb-3">{val.heading}</h2>
              <p className="text-gray-700 mb-6 text-xl">{val.subheading}</p>
            </div>

            {/* Offerings Cards Stack */}
            <div className="space-y-4">
              {val.offerings.map((offering, offeringIdx) => (
                <OfferingCard
                  key={offeringIdx}
                  heading={offering.head}
                  description={offering.discription}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
