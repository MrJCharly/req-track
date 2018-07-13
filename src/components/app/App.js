import React from 'react';
import LoadingBar from '../layout/LoadingBar';
import Header from '../header/Header';
import Drawer from '../layout/Drawer';
import Body from '../body/Body';

function App(props) {
  return (
    <div>
      <LoadingBar />
      <Header />
      <Drawer />
      <Body />
    </div>
  );
}

export default App;
