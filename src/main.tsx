import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import GlobalStyle from "./GlobalStyles";
import TodoProvider from "./provider/itemProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <TodoProvider>
        <App />
      </TodoProvider>
    </ApolloProvider>
  </React.StrictMode>
);
