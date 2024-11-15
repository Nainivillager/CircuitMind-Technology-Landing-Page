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
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default NavRoutes;
