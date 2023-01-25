import categoriesitem from "./categoriesitem.module.scss";
import { DELETE } from "../../utils/endpoints";

export const CategoriesItem = ({ data, setModal }) => {
  const deleteItem = () => {
    DELETE("categories", data.id).then((res) => console.log(res));
  };

  return (
    <div className={categoriesitem.main}>
      <img src={data.image} alt={data.name} />
      <h4 className={categoriesitem.name}>{data.name}</h4>
      <div className={categoriesitem.btns}>
        <button onClick={() => setModal(true)}>EDIT</button>
        <button className={categoriesitem.delete} onClick={() => deleteItem()}>
          DELETE
        </button>
      </div>
    </div>
  );
};
