import React from 'react';

import Location from './Location';

const App = () => {
  return (
    <div className="container mx-auto my-10 flex flex-col">
      <p className="font-bold text-2xl mx-auto">Select a location</p>
      <Location />
    </div>
  );
};

export default App;
