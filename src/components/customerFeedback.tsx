import { useState, useEffect } from 'react';
import { Star, StarHalf, Quote } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      src: '/a.jpg',
      rating: 4.5,
      review:
        'Absolutely fantastic service! The attention to detail was impressive, and the team went above and beyond my expectations.'
    },
    {
      id: 2,
      name: 'Mohan Jeet',
      src: '/ar.jpg',
      rating: 5,
      review:
        'Best experience ever! The product quality is outstanding, and the customer service team was incredibly helpful throughout.'
    },
    {
      id: 3,
      name: 'Rohan Joshi',
      src: '/b.jpg',
      rating: 4.5,
      review:
        'Very professional and efficient. Would definitely recommend to anyone looking for top-notch service.'
    },
    {
      id: 4,
      name: 'Jhon Elia',
      src: '/c.jpg',
      rating: 4,
      review:
        'Very professional learned robotics in real way which could be helpful for me in future purposes.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, reviews.length]);

  const handleSlideChange = (newIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      );
    }

    return stars;
  };

  const getVisibleReviews = () => {
    const visibleReviews = [];
    const totalReviews = reviews.length;

    // For large screens (3 cards)
    if (window.innerWidth >= 1024) {
      for (let i = -1; i <= 1; i++) {
        let index = currentIndex + i;
        if (index < 0) index = totalReviews - 1;
        if (index >= totalReviews) index = 0;
        visibleReviews.push({
          ...reviews[index],
          position: i
        });
      }
    }
    // For medium screens (2 cards)
    else if (window.innerWidth >= 768) {
      for (let i = 0; i < 2; i++) {
        const index = (currentIndex + i) % totalReviews;
        visibleReviews.push({
          ...reviews[index],
          position: i
        });
      }
    }
    // For small screens (1 card)
    else {
      visibleReviews.push({
        ...reviews[currentIndex],
        position: 0
      });
    }

    return visibleReviews;
  };

  const Card = ({ review, isCenter }) => {
    const getCardClasses = () => {
      const baseClasses =
        'bg-white rounded-lg shadow-lg p-6 mx-2 flex-shrink-0 transition-all duration-500 transform';

      if (window.innerWidth >= 1024) {
        if (isCenter) {
          return `${baseClasses} scale-110 z-10 shadow-xl`;
        }
        return `${baseClasses} scale-90 opacity-80`;
      }

      return baseClasses;
    };

    return (
      <>
        <div className={getCardClasses()}>
          <div className="flex flex-col items-center">
            <div
              className={`rounded-full bg-gray-200 overflow-hidden mb-4 transition-all duration-500
            ${isCenter ? 'w-28 h-28' : 'w-24 h-24'}`}
            >
              <img
                src={review.src}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3
              className={`font-semibold mb-2 transition-all duration-500
            ${isCenter ? 'text-2xl' : 'text-xl'}`}
            >
              {review.name}
            </h3>

            <div className="flex space-x-1 mb-4">
              {renderStars(review.rating)}
            </div>

            <p className="text-gray-600 text-center">{review.review}</p>
          </div>
        </div>
      </>
    );
  };

  const NavigationDots = () => (
    <div className="flex justify-center space-x-2 mt-4">
      {reviews.map((_, index) => (
        <button
          key={index}
          onClick={() => handleSlideChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-500 ${
            index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 opacity-10">
          <Quote size={120} className="text-blue-600 transform -rotate-12" />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hear from Our Happy Customers!
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-transparent rounded"></div>
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          <div className="h-1 w-20 bg-gradient-to-l from-blue-600 to-transparent rounded"></div>
        </div>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover why our customers love our service through their genuine
          experiences and stories
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className={`flex justify-center items-center transition-all duration-500 ease-in-out ${
              isTransitioning ? 'opacity-80' : 'opacity-100'
            }`}
          >
            {getVisibleReviews().map((review, index) => (
              <div
                key={review.id}
                className={`transition-all duration-500 ease-in-out
                 w-full md:w-1/2 lg:w-1/3 p-4
                 ${isTransitioning ? 'scale-95' : 'scale-100'}
               `}
              >
                <Card
                  review={review}
                  isCenter={window.innerWidth >= 1024 && review.position === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 hidden md:block transition-all duration-300 hover:scale-110 hover:shadow-xl"
          onClick={() =>
            handleSlideChange(
              currentIndex === 0 ? reviews.length - 1 : currentIndex - 1
            )
          }
        >
          ←
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 hidden md:block transition-all duration-300 hover:scale-110 hover:shadow-xl"
          onClick={() => handleSlideChange((currentIndex + 1) % reviews.length)}
        >
          →
        </button>

        <NavigationDots />
      </div>
    </div>
  );
};

export default CustomerReviews;
