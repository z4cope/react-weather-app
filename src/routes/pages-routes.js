import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components';

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<Navbar />}></Route>
    </Routes>
  );
};

export default PageRoutes;
