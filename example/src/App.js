import React from 'react'

import { Switch, Route } from 'stupid-react-router'
import 'stupid-react-router/dist/index.css'

const App = () => {
  return <div>
    ssd<br />
    <Switch>
      <Route path="/cock/:id/edit"
        values={[':id']}
        setValues={[e => {
          console.log(e);
        }]}>
        block
      </Route>
      <Route>nothing</Route>
    </Switch>
  </div>;
}

export default App
