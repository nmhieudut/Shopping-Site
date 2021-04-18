import React from "react";
import logo from "assets/react_ts.svg"
import "styles/css/components/common/spinner.css";

export const Spinner = () => {
  return (
    <div>
      <img className="reactLogo" src={logo} width="60px" height="60px" alt="logo"/>
      <p>Loading...</p>
    </div>
  );
};
