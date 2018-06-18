import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Admin from '../reqs/Admin';

function Body(props) {
  return (
    <main>
      <Switch>
        <Route path='/req/admin' component={Admin}/>
      </Switch>
    </main>
  );
}

export default Body;
