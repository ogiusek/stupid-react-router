import React from "react";
import RouteContext from "./RouteContext.js";

function Route({ children, path = "/", exact = false }) {
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