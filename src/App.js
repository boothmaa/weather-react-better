import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Dumb from "./weather"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="Header"></div>
    <Dumb />
  </StrictMode>
);

export default Dumb
