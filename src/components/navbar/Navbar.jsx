import navbar from "./navbar.module.scss";
import { navBarLinks } from "../../constants/navbar";
import { ListItem } from "../list-item/ListItem";

export const Navbar = ({ setRoute }) => {
  return (
    <ul className={navbar.main}>
      {navBarLinks.map((item) => (
        <ListItem
          setRoute={setRoute}
          route={item.route}
          icon={item.icon}
          key={item.id}
          label={item.label}
        />
      ))}
    </ul>
  );
};
