import React from 'react';
import Header from '../header/Header';
import PersistentDrawer from '../layout/PersistentDrawer';
import Body from '../body/Body';

function App(props) {
  return (
    <div>
      <PersistentDrawer />
      <Body />
    </div>
  );
}

export default App;
