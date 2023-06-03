import React, { ReactNode } from "react";

import { RouteContext } from "../Route";
import { redirect } from "../Redirect";

interface LinkProps {
    children?: ReactNode,
    to?: string,
    exact?: boolean
}

function Link({ children, to = '/', exact = false }: LinkProps): ReactNode {
    const ctx = React.useContext(RouteContext);

    const handleLink = (event) => {
        event.preventDefault();
        redirect((exact ? '' : ctx.path) + to);
    }

    return (
        <a href={to} onClick={handleLink}>{children}</a>
    );
}

export { Link };
export default Link;