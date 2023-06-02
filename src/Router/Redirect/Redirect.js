import React from "react";

import RouteContext from "../Route/RouteContext";
import { redirect } from "../index";

window.addEventListener('popstate', () => window.location.reload());

function Redirect({ to = '/', exact = false }) {
    const ctx = React.useContext(RouteContext);
    redirect((exact ? '' : ctx.path) + to);
    return (<React.Fragment />);
};

export { Redirect };