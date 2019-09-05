import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocations from "./useLocations";

const App = () => {
  const [lat, errorMessage] = useLocations();

  let content;

  if (errorMessage) {
    content = <div>Error :{errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else content = <Spinner message="Please accept location request" />;

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
