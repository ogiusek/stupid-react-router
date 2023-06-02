import React from "react";
import { Route } from "..";

import RouteContext from "../Route/RouteContext";
import GetChild from "./GetChild";

function Switch({ children }) {
    const ctx = React.useContext(RouteContext);
    const allowedChildTypes = [Route];

    if (children !== undefined && (
        Array.isArray(children) ?
            children.some(child => !allowedChildTypes.includes(child.type)) :
            !allowedChildTypes.includes(children.type))) {
        throw new Error("Invalid component in Switch. Only Route components are allowed.");
    }

    return (<GetChild ctxPath={ctx.path}>
        {children}
    </GetChild>);
};

export { Switch };
export default Switch;