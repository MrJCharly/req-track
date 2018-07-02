import React from 'react';
import { Switch, Route } from 'react-router-dom';

import req_admin from '../reqs/Admin';
import project_admin from '../../pages/project/Admin';
import developer_admin from '../views/developer/Admin';

function Body(props) {
  return (
    <main>
      <Switch>
        <Route path='/req/admin' component={req_admin}/>
        <Route path='/project/admin' component={project_admin}/>
        <Route path='/developer/admin' component={developer_admin}/>
      </Switch>
    </main>
  );
}

export default Body;
