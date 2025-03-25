import React from "react";
import sampleStore from "../store/SampleStore";
import { observer } from "mobx-react-lite";

const Counter = () => {
  return <div>{"X:" + sampleStore.clickCounter}</div>;
};

export default observer(Counter);
