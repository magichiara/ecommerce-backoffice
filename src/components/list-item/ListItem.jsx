import listitem from "./listitem.module.scss";

export const ListItem = ({ label, icon, setRoute, route }) => {
  return (
    <li className={listitem.main} onClick={() => setRoute(route)}>
      {icon}
      <span className={listitem.label}>{label}</span>
    </li>
  );
};
