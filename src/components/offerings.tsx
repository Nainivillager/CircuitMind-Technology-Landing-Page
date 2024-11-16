import { styles } from './styles';
import { data } from './constants';
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
  return (
    <div
      className="text-center pt-8 pb-2 mx-8 mb-8 rounded-lg"
      style={styles.mainSection}
    >
      <div className="flex justify-center items-center py-3 mx-8  rounded-lg">
        {' '}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
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
