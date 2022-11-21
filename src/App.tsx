import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import Icon1 from "@/assets/tabbar/home.png";
import Icon2 from "@/assets/tabbar/home_select.png";
import Icon3 from "@/assets/tabbar/car.png";
import Icon4 from "@/assets/tabbar/car_select.png";
import Icon5 from "@/assets/tabbar/appoint.png";
import Icon6 from "@/assets/tabbar/appoint_select.png";
import { ReactComponent as ReactLogo } from "@/assets/react.svg";

import "./App.scss";

function App() {
  const [count] = useState(0);
  console.log(count);
  return (
    <div className="app">
      <h1 className="h">Hello Vite + React!</h1>
      <div className="layout">
        <ReactLogo />
        <img src={reactLogo} />
        <img src={Icon1} />
        <img src={Icon2} />
        <img src={Icon3} />
        <img src={Icon4} />
        <img src={Icon5} />
        <img src={Icon6} />
        <div className="box"></div>
        <div>Button</div>
      </div>
    </div>
  );
}

export default App;
