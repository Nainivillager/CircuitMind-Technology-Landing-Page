import { Route, Routes } from 'react-router-dom';

import { Register, Sign, Store, Home, Error } from '../pages';

const NavRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default NavRoutes;
