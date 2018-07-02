import React from 'react';
import LoadingBar from '../layout/LoadingBar';
import PersistentDrawer from '../layout/PersistentDrawer';

function App(props) {
  return (
    <div>
      <LoadingBar />      
      <PersistentDrawer />
    </div>
  );
}

export default App;
