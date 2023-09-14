import React from 'react';
import {
  AppHeder,
  AppToolBar,
  ContentHeaderContainer,
} from '../components';
interface AppLayoutProps {
  children?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
}) => {
  return (
    <div className='w-full h-full'>
      <div className='h-screen grid grid-rows-8 grid-cols-10'>
        <div className='row-span-1 col-span-10 bg-blue-500 px-4 py-2'>
          <AppHeder />
        </div>
        <div className='row-span-1 col-span-10 bg-gray-300 px-4 py-2'>
          <ContentHeaderContainer />
        </div>

        <div className='row-span-6 col-span-10 grid grid-cols-10 '>
          <div className='col-span-1 bg-red-500 px-4 py-2'>
            <AppToolBar />
          </div>
          <div className='col-span-9 px-4 py-2'>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
