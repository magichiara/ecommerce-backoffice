import categoriesitem from "./categoriesitem.module.scss";

export const CategoriesItem = ({ data }) => {
  return (
    <div className={categoriesitem.main}>
      <h4>{data.name}</h4>
      <img src={data.image} alt={data.name} />
    </div>
  );
};
