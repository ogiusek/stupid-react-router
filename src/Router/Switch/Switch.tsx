import React from "react";
import { Route } from "..";

import { RouteContext } from "../Route";
import { routeLogic } from "../Route";

function Switch({ children: childrens }): JSX.Element {
    const ctx = React.useContext(RouteContext);
    const allowedChildTypes = [Route];

    const children = childrens === undefined ? [] : (Array.isArray(childrens) ? childrens : [childrens])

    if (children.some(child => !allowedChildTypes.includes(child.type))) {
        throw new Error("Invalid component in Switch. Only Route components are allowed.");
    }

    const child = [...(children.map(child => {
        const show = routeLogic(
            ctx.path,
            child.props.path,
            child.props.exact,
            child.props.values,
            child.props.setValues,
        ).show;
        return show ? child : undefined;
    }).filter(e => e !== undefined)), ''][0];

    return (<React.Fragment>
        {child}
    </React.Fragment>);
};

export { Switch };
export default Switch;