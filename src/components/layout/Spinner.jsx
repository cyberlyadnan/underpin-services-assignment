import React from "react";

const Spinner = () => {
  return (
    <div className="w-screen h-[80vh] flex justify-center items-center">
      <div className="loader">
        <div className="cell d-0"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>

        <div className="cell d-1"></div>
        <div className="cell d-2"></div>

        <div className="cell d-2"></div>
        <div className="cell d-3"></div>

        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
      </div>
    </div>
  );
};

export default Spinner;
