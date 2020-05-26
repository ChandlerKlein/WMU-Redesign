import React from 'react';

import Content from './Content';
import NavPanel from './NavPanel';

const Page = () => {
  return (
    <div className='row'>
      <NavPanel />
      <Content />
    </div>
  );
};

export default Page;
