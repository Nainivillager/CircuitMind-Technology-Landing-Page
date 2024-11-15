import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const Store = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-72 bg-gray-100 m-8 rounded-lg">
      {' '}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-pulse">
        {' '}
        Work in Progress{' '}
      </h1>{' '}
      <p className="text-lg md:text-2xl text-gray-600">
        {' '}
        We're working hard to get things ready. Stay tuned!{' '}
      </p>
      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 my-12">
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
    </div>
  );
};
export default Store;
