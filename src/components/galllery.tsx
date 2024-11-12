import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import '../App';
// Define the image type
interface ImageType {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [visibleImages, setVisibleImages] = useState<number>(6);

  const images: ImageType[] = [
    { id: 1, src: '/a.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: '/b.jpg', alt: 'Gallery Image 2' },
    { id: 3, src: '/c.jpg', alt: 'Gallery Image 3' },
    { id: 4, src: '/ar.jpg', alt: 'Gallery Image 4' },
    { id: 5, src: '/hb.jpg', alt: 'Gallery Image 5' },
    { id: 6, src: '/clg.jpeg', alt: 'Gallery Image 6' },
    { id: 7, src: '/c.jpg', alt: 'Gallery Image 3' },
    { id: 8, src: '/ar.jpg', alt: 'Gallery Image 4' },
    { id: 9, src: '/hb.jpg', alt: 'Gallery Image 5' },
    { id: 10, src: '/clg.jpeg', alt: 'Gallery Image 6' }
  ];

  const loadMoreImages = () => {
    setVisibleImages((prev) => Math.min(prev + 6, images.length));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Heading with animated underline */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Image Gallery</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full transform transition-all duration-300 hover:w-32 hover:bg-blue-600" />
      </div>

      {/* Main gallery grid with animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.slice(0, visibleImages).map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 
                    animate-fadeIn opacity-0"
            style={{
              animationDelay: `${image.id * 100}ms`,
              animationFillMode: 'forwards'
            }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleImages < images.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreImages}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full 
                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                    flex items-center justify-center mx-auto space-x-2"
          >
            <span>Show More</span>
            <span className="text-sm">
              ({images.length - visibleImages} more)
            </span>
          </button>
        </div>
      )}

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl mx-auto p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
