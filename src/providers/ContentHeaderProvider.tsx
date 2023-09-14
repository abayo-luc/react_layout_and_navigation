import React, { useState } from 'react';
import { ContentHeaderContext } from '../context';

type ContentHeaderProviderProps = {
  children: React.ReactNode;
};

export const ContentHeaderProvider: React.FC<
  ContentHeaderProviderProps
> = ({ children }) => {
  const [contentComponent, setContentComponent] =
    useState<React.ReactNode>();

  return (
    <ContentHeaderContext.Provider
      value={{ contentComponent, setContentComponent }}
    >
      {children}
    </ContentHeaderContext.Provider>
  );
};
