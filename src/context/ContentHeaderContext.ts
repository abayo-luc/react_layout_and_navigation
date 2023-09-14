import React, { createContext, useContext } from 'react';

const defaultContentHeader: {
  // make it easy to manage other logic on the component level
  contentComponent?: React.ReactNode;
  setContentComponent: React.Dispatch<
    React.SetStateAction<React.ReactNode>
  >;
} = {
  setContentComponent: () => {},
};

export const ContentHeaderContext = createContext(
  defaultContentHeader
);

export const useContentHeader = () => {
  return useContext(ContentHeaderContext);
};
