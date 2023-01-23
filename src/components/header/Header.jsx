import header from "./header.module.scss";

export const Header = () => {
  return (
    <div className={header.main}>
      <div className={header.logo}></div>
      <h5>E-Commerce Dashboard</h5>
    </div>
  );
};
