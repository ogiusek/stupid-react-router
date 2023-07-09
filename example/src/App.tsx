
import React from "react";
import { Route, Switch } from "stupid-react-router";

const App = () => {
  return (<div>
    ssd<br />
    <Switch>
      <Route path="/walk/:id/edit"
        values={[':id']}
        setValues={[(e: string) => {
          console.log(e);
        }]}>
        <div>
          block
        </div>
      </Route>
      <Route path="">
        <div>
          nothing
        </div>
      </Route>

    </Switch>
  </div>);
}

export default App;
