import navbar from "./navbar.module.scss";
import { navBarLinks } from "../../constants/navbar";
import { ListItem } from "../list-item/ListItem";

export const Navbar = () => {
  return (
    <ul className={navbar.main}>
      {navBarLinks.map((item) => (
        <ListItem icon={item.icon} key={item.id} label={item.label} />
      ))}
    </ul>
  );
};
