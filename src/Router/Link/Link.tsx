import * as React from "react";

import { RouteContext } from "../Route/RouteContext";
import { redirect } from "../Redirect/redirect";

interface LinkProps {
  to: string,
  children?: any,
  relative?: boolean,
  disabled?: boolean,

  className?: string,
  style?: React.CSSProperties
}

function Link({ children, to = '/', relative = false, disabled = false, className = '', style = {} }: LinkProps): JSX.Element {
  const ctx = React.useContext(RouteContext);
  const handleLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    if (!disabled)
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
