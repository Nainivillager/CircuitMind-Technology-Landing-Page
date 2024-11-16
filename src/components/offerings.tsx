import { styles } from './styles';
interface OfferingCardProps {
  heading: string;
  description: string;
}

const OfferingCard = ({ heading, description }: OfferingCardProps) => (
  <div className="bg-slate-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-lg font-semibold mb-2 text-indigo-600">{heading}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function Features() {
  const data = [
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
      img: 'clg.jpeg',
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
            'We offer personalized robotics training at home for students in classes 6-12, ensuring tailored learning experiences that ignite curiosity and innovation. Our hands-on approach helps young minds grasp complex concepts, build functional robots, and develop critical thinking skills. '
        },
        {
          head: 'Project Assistance at your Doorstep',
          discription:
            'We offer doorstep project assistance for electronics projects, bringing expert guidance directly to you. Whether you are working on a school project or a personal endeavor, our support ensures you achieve your goals with ease. Let us help you turn your electronic ideas into reality, right at your doorstep!'
        }
      ]
    }
  ];

  return (
    <div
      className="text-center pt-8 pb-2 mx-8 mb-8 rounded-lg"
      style={styles.mainSection}
    >
      <div
        className="flex justify-center items-center py-4 mx-8 mb-0 rounded-lg"
        style={styles.heading}
      >
        {' '}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          {' '}
          Discover Our{' '}
          <span className="block text-blue-600">Tailored Offerings!</span>{' '}
        </h1>
      </div>
      <div>
        {data.map((val, idx) => (
          <div
            key={idx}
            className={`flex flex-col  ${
              idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-8 py-8 px-8`}
          >
            {/* Image Container */}
            <div className="w-full  md:w-1/2 h:1/3 flex justify-center md:h-[38rem]">
              <img
                src={val.img}
                alt="img"
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>

            {/* Content Container with Offerings Cards */}
            <div className="w-full md:w-1/2 space-y-6 ">
              <div className="px-4 ">
                <h2 className="text-2xl font-bold mb-3">{val.heading}</h2>
                <p className="text-gray-700 text-xl">{val.subheading}</p>
              </div>

              {/* Offerings Cards Stack */}
              <div className="space-y-6 ">
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
    </div>
  );
}
