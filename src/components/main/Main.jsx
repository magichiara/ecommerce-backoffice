import main from "./main.module.scss";
import { Navbar } from "../navbar/Navbar";

export const Main = () => {
  return (
    <div className={main.main_section}>
      <div className={main.left_section}>
        <Navbar />
      </div>

      <div className={main.right_section}></div>
    </div>
  );
};
