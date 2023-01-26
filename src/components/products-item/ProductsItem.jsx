import productsitem from "./productsitem.module.scss";
import { DELETE } from "../../utils/endpoints";

export const ProductsItem = ({ data, setModal }) => {
  const deleteItem = () => {
    DELETE("products", data.id).then((res) => console.log(res));
  };

  return (
    <div className={productsitem.main}>
      <img src={data.images} alt={data.title} />
      <h4 className={productsitem.name}>{data.title}</h4>
      <h4 className={productsitem.price}>{data.price} €</h4>
      <div className={productsitem.btns}>
        <button onClick={() => setModal(true)}>EDIT</button>
        <button className={productsitem.delete} onClick={() => deleteItem()}>
          DELETE
        </button>
      </div>
    </div>
  );
};
