import * as React from "react";

import { RouteContext } from "../Route/RouteContext";
import { redirect } from "../Redirect/redirect";

interface LinkProps {
  children?: any,
  to?: string,
  exact?: boolean
}

function Link({ children, to = '/', exact = false }: LinkProps): JSX.Element {
  const ctx = React.useContext(RouteContext);
  const handleLink = (event: any) => {
    event.preventDefault();
    redirect((exact ? '' : ctx['path']) + to);
  }

  return (
    <a href={to} onClick={handleLink}>{children}</a>
  );
}

export { Link, LinkProps };
export default Link;
