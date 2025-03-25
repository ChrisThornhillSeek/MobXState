import React from "react";
import MyButton from "./components/MyButton";
import { gql } from "@apollo/client";
import DisplayLocations from "./components/DisplayLocations";
import Label from "./components/Label";
import Counter from "./components/Counter";
import EvenFlag from "./components/EvenFlag";

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
      viewed @client # This is a local-only field
    }
  }
`;
function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="Increment Counter" />
      <br />
      <Label title="Counter"></Label>
      <EvenFlag />
      <br />
      <Counter />
      <hr />
      <DisplayLocations />
    </div>
  );
}

export default App;
