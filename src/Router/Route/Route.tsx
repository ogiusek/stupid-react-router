import React, { useEffect } from "react";
import { RouteContext } from "./index";

interface RouteProps {
    children?: JSX.Element,
    path?: string,
    exact?: boolean,

    values?: string[],
    setValues?: ((path) => any)[],
}

function routeLogic(ctxPath: string = '',
    path: string = '',
    exact: boolean = false,
    valuesNamesArr: string[] = [],
    setValuesArr: ((path) => any)[] = []
) {
    const valuesNames = valuesNamesArr;
    const setValues = setValuesArr;

    const realPath = window.location.pathname;
    const realPathArr = realPath.split('/');
    const wantedPath = ctxPath + (path[path.length - 1] === '/' ? path.slice(-1, 0) : path);
    const wantedPathArr = wantedPath.split('/');

    if (valuesNames.length !== setValues.length) {
        throw new Error("Route: values and setValues length's are not equal");
    }

    let values: string[] = [];
    let routeContextProviderPath = "";
    const show = (exact ? wantedPathArr.length === realPathArr.length :
        wantedPathArr.length <= realPathArr.length) && (
            wantedPathArr.every((e, i) => {
                if (e === valuesNames[values.length]) {
                    if (realPathArr[i] === '') return false;

                    values.push(realPathArr[i]);
                    routeContextProviderPath += `/${realPathArr[i]}`;
                    return true;
                }
                routeContextProviderPath += `/${e}`;
                return e === realPathArr[i] || (e === '' && i);
            }));

    return {
        values: values,
        routeContextProviderPath: routeContextProviderPath,
        show: show
    };
}

function Route({ children, path = "/", exact = false,
    values: valuesNames = [], setValues = [],
}: RouteProps): JSX.Element {

    const ctx = React.useContext(RouteContext);

    const rLogic = routeLogic(ctx.path, path, exact, valuesNames, setValues);
    const show = rLogic.show;
    const values = rLogic.values;
    const routeContextProviderPath = rLogic.routeContextProviderPath;

    useEffect(() => {
        if (show) {
            setValues.map((_, i) => {
                setValues[i](values[i]);
            });
        }
    }, [window.location.pathname]);

    return (<React.Fragment>{show &&
        (<RouteContext.Provider value={{ path: routeContextProviderPath }}>
            {children}
        </RouteContext.Provider>)}
    </React.Fragment>);

}

export { Route, routeLogic };
export default Route;