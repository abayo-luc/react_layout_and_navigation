import { useContentHeader } from '../context';

export const ContentHeaderContainer = () => {
  const { contentComponent = null } = useContentHeader();
  return <div>{contentComponent}</div>;
};
