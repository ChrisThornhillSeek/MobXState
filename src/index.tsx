import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";

export const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache,
  connectToDevTools: true,
});

let root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
