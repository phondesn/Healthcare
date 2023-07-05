import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainUI from "./mainUI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainUI></MainUI>
  </BrowserRouter>
);
