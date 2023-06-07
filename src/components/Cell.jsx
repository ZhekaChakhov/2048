import React from "react";

export const Cell = ({ value }) => {
  const cellClass = (value) => {
    if (+value == 2) return "n-2";
    else if (+value == 4) return "n-4";
    else if (+value == 8) return "n-8";
    else if (+value == 16) return "n-16";
    else if (+value == 32) return "n-32";
    else if (+value == 64) return "n-64";
    else if (+value == 128) return "n-128";
    else if (+value == 256) return "n-256";
    else if (+value == 512) return "n-512";
    else if (+value == 1024) return "n-1024";
    else if (+value == 2048) return "n-2048";
    else return "empty";
  };

  return <div className={`Cell ${cellClass(value)}`}>{value}</div>;
};
