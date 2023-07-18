import * as React from "react";

import { redirect } from "../Redirect/redirect";
import { RouteContext } from "../Route/RouteContext";

interface RedirectProps {
  to: string,
  relative?: boolean
}

function Redirect({ to = '/', relative = false }: RedirectProps): JSX.Element {
  const ctx = React.useContext(RouteContext);

  React.useEffect(() => {
    redirect((relative ? ctx['path'] : '') + to);
  }, []);

  return (<React.Fragment />);
}

export { Redirect };
export default Redirect;
