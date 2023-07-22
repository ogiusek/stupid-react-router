import React, { Dispatch, useEffect } from "react";

interface IRouterProps {
  state: boolean,
  setState: Dispatch<React.SetStateAction<boolean>>
}

let refresher: boolean;
let setRefresher: Dispatch<React.SetStateAction<any>> | undefined = undefined;
let refresh = () => {
  if (setRefresher === undefined)
    throw new Error('stupid-react-router: Set Refresher is required. More info is in README. https://github.com/ogiusek/stupid-react-router');

  setRefresher(!refresher);
};

function SetRefresher({ state, setState }: IRouterProps) {
  useEffect(() => {
    if (setRefresher !== undefined)
      throw new Error('stupid-react-router: SetRefresher can be only one');

    setRefresher = setState;
  }, []);
  refresher = state;

  return (<React.Fragment />);
}

export { SetRefresher, refresh };
export default SetRefresher;
