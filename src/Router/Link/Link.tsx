import * as React from "react";

import { RouteContext } from "../Route/RouteContext";
import { redirect } from "../Redirect/redirect";

interface LinkProps {
  to: string,
  children?: any,
  relative?: boolean,

  className?: string,
  style?: React.CSSProperties
}

function Link({ children, to = '/', relative = false, className = '', style = {} }: LinkProps): JSX.Element {
  const ctx = React.useContext(RouteContext);
  const handleLink = (event: any) => {
    event.preventDefault();
    redirect((relative ? ctx['path'] : '') + to);
  }

  return (
    <a href={to} onClick={handleLink}
      className={className} style={style}
    >{children}</a >
  );
}

export { Link, LinkProps };
export default Link;
