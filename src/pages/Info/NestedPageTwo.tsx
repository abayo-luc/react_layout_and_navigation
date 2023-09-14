import { useEffect } from 'react';
import { useContentHeader } from '../../context';
const NestedPageTwoHeader = () => {
  return <div>#/info/info-nested/two</div>;
};
export const NestedPageTwo = () => {
  const { setContentComponent } = useContentHeader();
  useEffect(() => {
    setContentComponent(<NestedPageTwoHeader />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Info: nested Page Two</div>;
};
