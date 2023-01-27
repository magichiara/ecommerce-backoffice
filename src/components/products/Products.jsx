import products from "./products.module.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/endpoints";
import { Loader } from "../loader/Loader";
import { ProductsItem } from "../products-item/ProductsItem";
import { Title } from "../title/Title";

export const Products = ({ setModal, setModalChildren }) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GET("products")
      .then((data) => setProductsList(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className={products.loader}>
        <Loader />
      </div>
    );

  return (
    <div className={products.main}>
      <div className={products.title}>
        <Title title="PRODUCTS" />
        <button
          onClick={() => {
            setModalChildren("products");
            setModal(true);
          }}
        >
          +
        </button>
      </div>

      <div className={products.container}>
        {productsList.map((product, index) => (
          <ProductsItem key={index} data={product} />
        ))}
      </div>
    </div>
  );
};
