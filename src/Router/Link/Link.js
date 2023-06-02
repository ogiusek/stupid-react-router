import React from "react";

import RouteContext from "../Route/RouteContext";
import { redirect } from "../Redirect";

function Link({ children, to = '/', exact = false }) {
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