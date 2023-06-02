import React from "react";

function GetChild(children, ctxPath) {
    if (Array.isArray(children)) {
        for (let index = 0; index < children.length; index++) {
            const child = children[index];

            const realPath = window.location.pathname;
            const wantedPath = ctxPath + child.props.path;

            const show = realPath.startsWith(wantedPath) && (realPath === wantedPath ||
                (!child.props.exact && realPath[wantedPath.length] === '/'));

            if (show) {
                return child;
            }
        }
    }
    return (<React.Fragment />);
}

export { GetChild };
export default GetChild;