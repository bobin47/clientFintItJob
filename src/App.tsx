import "./App.scss";
import useRouteElement from "./hooks/useRouteElement";
// import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  const routeElement = useRouteElement();
  return <div>{routeElement}</div>;
}

export default App;
