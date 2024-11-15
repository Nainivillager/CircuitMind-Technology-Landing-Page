import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, UserPlus, Menu, X } from 'lucide-react';
import { styles } from './styles';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate = useNavigate();

  return (
    <nav
      style={styles.navbar}
      className="shadow-md rounded-lg mx-2 sm:mx-4 lg:mx-6"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section with Link to Home */}
          <Link to="/" className="flex items-center">
            <img
              className="mix-blend-multiply h-16 md:h-20 object-contain transition-transform duration-300 hover:scale-105"
              src="Clogo.webp"
              alt="Company Logo"
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-orange-200 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Store Link */}
            <Link
              to="/store"
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200 group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Store</span>
            </Link>

            {/* Sign In Link */}
            <Link
              to="/sign"
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200 group"
            >
              <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Sign In</span>
            </Link>

            {/* Register Link */}
            <Link
              to="/register"
              className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 space-x-1 group"
            >
              <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Register</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-6 pt-2">
            {/* Store Link */}
            <Link
              to="/store"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 group px-2 py-1 rounded-lg hover:bg-orange-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Store</span>
            </Link>

            {/* Sign In Link */}
            <Link
              to="/sign"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 group px-2 py-1 rounded-lg hover:bg-orange-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Sign In</span>
            </Link>

            {/* Register Link */}
            <Link
              to="/register"
              className="flex items-center justify-center space-x-1 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
