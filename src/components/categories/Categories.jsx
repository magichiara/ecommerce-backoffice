import categories from "./categories.module.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/endpoints";
import { CategoriesItem } from "../categories-item/CategoriesItem";
import { Loader } from "../loader/Loader";

export const Categories = ({ setModal }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);

  /*   const filteredCategories = (arr) => {
    const categoryArr = ["shoes", "electronics", "clothes", "others", "licras"];
    return arr.filter((category) =>
      categoryArr.includes(category.name.toLowerCase())
    );
  }; */

  useEffect(() => {
    setLoading(true);
    GET("categories")
      .then((data) => setCategoryList(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className={categories.loader}>
        <Loader />
      </div>
    );
  return (
    <div className={categories.main}>
      <div className={categories.title}>
        <h3>CATEGORIES</h3>
        <button onClick={() => setModal(true)}>+</button>
      </div>

      <div className={categories.container}>
        {categoryList.map((category, index) => (
          <CategoriesItem setModal={setModal} key={index} data={category} />
        ))}
      </div>
    </div>
  );
};
