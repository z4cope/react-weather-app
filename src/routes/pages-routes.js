import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components';
import { FrontPage, DetailsPage } from '../pages';
import * as ROUTES from '../constants/routes';

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path={ROUTES.FRONTPAGE} element={<FrontPage />} />
        <Route path={ROUTES.DETAILS} element={<DetailsPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
