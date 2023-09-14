import { Link } from 'react-router-dom';
import { routes } from '../config';
export const AppToolBar = () => (
  <div className='px-2'>
    {Object.keys(routes).map((key) => (
      <div key={key} className='inline-block py-2'>
        <Link to={routes[key].route}>
          {routes[key].title}
        </Link>
      </div>
    ))}
  </div>
);
