import React, { ReactNode } from "react";
import { RouteContext } from "../Route";

interface GetPathProps {
    callback?: () => any,
    relative?: Boolean
}

function GetPath({ callback, relative = true }: GetPathProps): ReactNode {
    const ctx = React.useContext(RouteContext);

    const defaultPath = window.location.pathname;
    const path = relative ? defaultPath.slice(ctx.path.length) :
        defaultPath;

    callback(path);

    return (<React.Fragment />);
}

export { GetPath };
export default GetPath;