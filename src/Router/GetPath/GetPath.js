import React from "react";
import RouteContext from "../Route/RouteContext.js";

function GetPath({ callback, relative = true }) {
    const ctx = React.useContext(RouteContext);

    const defaultPath = window.location.pathname;
    const path = relative ? defaultPath.slice(ctx.path.length) :
        defaultPath;

    callback(path);

    return (<React.Fragment />);
}

export { GetPath };
export default GetPath;