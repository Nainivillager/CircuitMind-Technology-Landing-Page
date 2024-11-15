import Marquee from 'react-fast-marquee';
import { styles } from './styles';
export default function MarqueeSlider() {
  const marqueData = [
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

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden py-8 ">
        <Marquee
          speed={80}
          gradient={true}
          gradientColor="teal-600"
          gradientWidth={50}
          className="overflow-hidden"
        >
          <div className="flex items-center" style={styles.mainSection}>
            {marqueData.map((data, index) => (
              <div
                key={`${data.alt}-${index}`}
                className="mx-8 flex items-center justify-center"
              >
                <div className="relative group">
                  <img
                    src={data.image}
                    alt={data.alt}
                    className="h-16 w-auto object-contain opacity-75 mix-blend-multiply filter contrast-125 brightness-110 hover:opacity-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-transparent mix-blend-multiply group-hover:bg-opacity-0 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
