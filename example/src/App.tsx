
import React, { useState } from "react";
import { Route, Switch, Link, SetRefresher } from "stupid-react-router";

const App = () => {
  const [refresher, setRefresher] = useState<boolean>(false);
  const [v, setV] = useState(0);

  return (<div>
    <SetRefresher state={refresher} setState={setRefresher} />
    ssd<br />
    <Switch>
      <Route path="/b">
        <Link to="/a">a to</Link>
        <button onClick={() => { setV(v + 1) }}>{v}btn</button>
      </Route>

      <Route path="/a">
        <Link to="/b">b to</Link>
        <button onClick={() => { setV(v + 1) }}>{v}btn</button>
      </Route>

    </Switch>
  </div>);
}

export default App;
