import React, { ReactNode } from "react";

import { RouteContext } from "../Route";
import { redirect } from "../index";

interface RedirectProps {
    to?: string,
    exact?: boolean
}

function Redirect({ to = '/', exact = false }: RedirectProps): ReactNode {
    const ctx = React.useContext(RouteContext);
    redirect((exact ? '' : ctx.path) + to);
    return (<React.Fragment />);
};

export { Redirect };