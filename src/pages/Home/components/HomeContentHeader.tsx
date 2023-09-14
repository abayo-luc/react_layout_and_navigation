import { useState } from 'react';

export const HomeContentHeader = () => {
  const [title, setTitle] = useState<string>('Home Page');
  const handleTitleChange = () => {
    if (title === 'New Title') {
      setTitle('Home Page');
      return;
    }
    setTitle('New Title');
  };
  return (
    <div className=' flex flex-row items-center space-x-5'>
      <div>{title}</div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleTitleChange}
      >
        Change Title
      </button>
    </div>
  );
};
