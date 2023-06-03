import React, { ReactNode } from "react";
import { RouteContext } from "./index";

interface RouteProps {
    children?: ReactNode,
    path?: string,
    exact?: boolean
}

function Route({ children, path = "/", exact = false }: RouteProps): ReactNode {
    const ctx = React.useContext(RouteContext);

    const realPath = window.location.pathname;
    const wantedPath = ctx.path + path;

    const show = realPath.startsWith(wantedPath) && (realPath === wantedPath ||
        (!exact && realPath[wantedPath.length] === '/'));

    if (!show) {
        return (<React.Fragment />);
    }

    return (<RouteContext.Provider value={{ path: wantedPath }}>
        {children}
    </RouteContext.Provider>);
}

export { Route };
export default Route;