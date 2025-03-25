import React from "react";
import sampleStore from "../store/SampleStore";
import { observer } from "mobx-react-lite";

const Label = ({ title }: { title: string }) => {
  return (
    <div style={{ padding: 4, fontWeight: "bold" }}>
      {title + " : " + sampleStore.clickCounter}
    </div>
  );
};

export default observer(Label);
