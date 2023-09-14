import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { InfoPage } from './InfoPage';
import { NestedPageOne } from './NestedPageOne';
import { NestedPageTwo } from './NestedPageTwo';
import { useContentHeader } from '../../context';
import { useEffect } from 'react';

const InfoPageContentHeader = () => {
  return <div>#/info</div>;
};

export const Info = () => {
  const location = useLocation();
  const { setContentComponent } = useContentHeader();

  // rendering the content header on the page level and render if there is change in pathname.
  // i.e if back to this page
  useEffect(() => {
    setContentComponent(<InfoPageContentHeader />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Routes>
      <Route index element={<InfoPage />} />
      <Route
        path='info-nested-1'
        element={<NestedPageOne />}
      />
      <Route
        path='info-nested-2'
        element={<NestedPageTwo />}
      />
    </Routes>
  );
};
