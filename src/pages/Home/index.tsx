import { useEffect } from 'react';
import { useContentHeader } from '../../context';
import { HomeContentHeader } from './components/HomeContentHeader';

export const Home = () => {
  const { setContentComponent } = useContentHeader();

  useEffect(() => {
    setContentComponent(<HomeContentHeader />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Hello InfoPage</div>;
};
