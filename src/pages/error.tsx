import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Astronaut image floating animation */}
        <div className="relative mb-8 animate-bounce">
          <img
            src="astro.jpg"
            alt="Floating Astronaut"
            className="w-64 h-64 mx-auto rounded-full"
          />
        </div>

        {/* Error text with glow effect */}
        <h1 className="text-9xl font-bold text-white mb-4 animate-pulse">
          4<span className="text-blue-500">0</span>4
        </h1>

        <h2 className="text-3xl font-semibold text-white mb-8">
          Buddy, We Have a Problem!
        </h2>

        <p className="text-gray-400 text-xl mb-8">
          Looks like you've ventured too far into space. This page is lost in
          the cosmic void!
        </p>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home size={20} />
            Home
          </button>
        </div>

        {/* Stars background */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Error;
