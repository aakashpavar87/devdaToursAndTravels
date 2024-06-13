import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMyRoute from "../store/store";

function RouteInfo() {
  const { cabroute } = useParams();
  const { routeInfo } = useMyRoute();
  const [foundRoute, setFoundRoute] = useState({});
  useEffect(() => {
    let foundObj = routeInfo?.filter((route) => route.slug === cabroute)[0];
    setFoundRoute(foundObj);
    return () => {};
  }, []);

  return (
    <div>
      RouteInfo
      <p>{foundRoute?.description}</p>
      <p>Route : {foundRoute?.slug}</p>
    </div>
  );
}

export default RouteInfo;