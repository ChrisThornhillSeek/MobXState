import React from "react";
import sampleStore from "../store/SampleStore";

const MyButton = ({ title }: { title: string }) => {
  const handleClick = (event: any) => {
    sampleStore.incCounter();
    console.log(sampleStore.clickCounter);
  };

  return <button onClick={handleClick}>{title}</button>;
};

export default MyButton;
