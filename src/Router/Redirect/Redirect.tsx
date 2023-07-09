import * as React from "react";

import { RouteContext } from "../Route/index";
import { redirect } from "./redirect";

interface RedirectProps {
  to?: string,
  exact?: boolean
}

function Redirect({ to = '/', exact = false }: RedirectProps): JSX.Element {
  const ctx = React.useContext(RouteContext);
  redirect((exact ? '' : ctx.path) + to);
  return (<React.Fragment />);
};

export { Redirect, RedirectProps };
