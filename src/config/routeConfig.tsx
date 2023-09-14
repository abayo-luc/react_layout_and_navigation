import { RouteObject } from 'react-router-dom';
import { Home, Info } from '../pages';
import { routes } from './routes';

export const routeConfig: RouteObject[] = [
  {
    path: routes.home.path,
    element: <Home />,
    errorElement: <div>Home Page Error Page</div>,
  },
  {
    path: routes.info.path,
    element: <Info />,
    errorElement: <div>Info Page Error Page</div>,
  },
];
