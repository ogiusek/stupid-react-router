import * as React from "react";
import { RouteContext } from "./RouteContext";

interface RouteProps {
  children?: any,
  path: string,
  exact?: boolean,

  values?: string[],
  setValues?: (paths: string[]) => any,
}

function routeLogic(ctxPath: string = '',
  path: string,
  exact: boolean = false,
  valuesNamesArr: string[] = [],
) {
  const valuesNames = valuesNamesArr;

  const realPath = window.location.pathname;
  const realPathArr: string[] = realPath.split('/').filter(e => e.length);
  const wantedPath = ctxPath + (path[path.length - 1] === '/' ? path.slice(-1, 0) : path);
  const wantedPathArr = wantedPath.split('/').filter(e => e.length);

  let values: any[] = [];
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
  values: valuesNames = [], setValues = () => { },
}: RouteProps): JSX.Element {

  const ctx = React.useContext(RouteContext);

  const rLogic = routeLogic(ctx.path, path, exact, valuesNames);
  const show = rLogic.show;
  const values = rLogic.values;
  const routeContextProviderPath = rLogic.routeContextProviderPath;

  React.useEffect(() => {
    if (show) {
      setValues(values);
    }
  }, [window.location.pathname]);

  return (<React.Fragment>{show &&
    (<RouteContext.Provider value={{ path: routeContextProviderPath }}>
      {children}
    </RouteContext.Provider>)}
  </React.Fragment>);

}

export { Route, routeLogic, RouteProps };
export default Route;
