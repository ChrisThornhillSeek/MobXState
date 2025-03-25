import { useReactiveVar } from "@apollo/client";
import React from "react";
import { clickCountVar } from "../cache";

const EvenFlag = () => {
  const data = useReactiveVar(clickCountVar);
  const n = Number(data);

  const isEven = n === 0 || !!(n && !(n % 2));

  if (isEven)
    return <span style={{ color: "green", fontWeight: "bold" }}>EVEN</span>;
  // return <span style={{ color: "red", fontWeight: "bold" }}>ODD</span>;
};

export default EvenFlag;
