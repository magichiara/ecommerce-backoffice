import main from "./main.module.scss";
import { Navbar } from "../navbar/Navbar";
import { Home } from "../home/Home";
import { Categories } from "../categories/Categories";
import { useState } from "react";

export const Main = ({ setModal }) => {
  const [route, setRoute] = useState("home");

  return (
    <div className={main.main_section}>
      <div className={main.left_section}>
        <Navbar setRoute={setRoute} />
      </div>

      <div className={main.right_section}>
        {route === "home" && <Home />}
        {route === "categories" && <Categories setModal={setModal} />}
        {route === "products" && <Home />}
        {route === "orders" && <Home />}
        {route === "users" && <Home />}
      </div>
    </div>
  );
};
