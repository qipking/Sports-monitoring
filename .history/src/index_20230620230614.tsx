/* @refresh reload */
import { render } from "solid-js/web";

import "./styles.css";
import App from "./App";
import Login from "./Login";

render(() => <App />, document.getElementById("root") as HTMLElement);
