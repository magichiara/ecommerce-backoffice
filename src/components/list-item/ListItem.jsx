import listitem from "./listitem.module.scss";

export const ListItem = ({ label, icon }) => {
  return (
    <li className={listitem.main}>
      {icon}
      <span className={listitem.label}>{label}</span>
    </li>
  );
};
