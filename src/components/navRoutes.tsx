import { Route, Routes } from 'react-router-dom';
import {
  Register,
  Sign,
  Store,
  Home,
  Error,
  Contact,
  Gallery,
  Services,
  About
} from '../pages';

const NavRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Navbar Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/register" element={<Register />} />

      {/* Footer Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />

      {/* 404 Route */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default NavRoutes;
