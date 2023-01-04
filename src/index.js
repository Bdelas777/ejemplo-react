import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard, Greeting } from "./Greeting";
import Products from "./Products";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Greeting />
    <UserCard />
    <Products />
  </div>
);
