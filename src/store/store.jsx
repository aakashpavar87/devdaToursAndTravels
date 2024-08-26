import { createContext, useContext, useState } from "react";
import { initialState } from "./data";
export const routeContext = createContext([]);

const useMyRoute = () => {
  return useContext(routeContext);
};

export const RouteProvider = ({ children }) => {
  const [routeInfo, setRouteInfo] = useState(initialState);
  return (
    <routeContext.Provider value={{ routeInfo, setRouteInfo }}>
      {children}
    </routeContext.Provider>
  );
};

export default useMyRoute;
