import React from "react";
import { RouteContext } from "../Route";

interface GetPathProps {
    callback: (path) => any,
    relative?: Boolean
}

function GetPath({ callback, relative = true }: GetPathProps): JSX.Element {
    const ctx = React.useContext(RouteContext);

    const defaultPath = window.location.pathname;
    const path = relative ? defaultPath.slice(ctx.path.length) :
        defaultPath;

    callback(path);

    return (<React.Fragment />);
}

export { GetPath };
export default GetPath;