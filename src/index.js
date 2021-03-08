import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

const initialData = window.__INITIAL_DATA__;
hydrate(<App page={initialData.page} />, document.getElementById("root"));
