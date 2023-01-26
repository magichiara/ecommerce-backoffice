import formprod from "./formprod.module.scss";
import { useState } from "react";
import { POST } from "../../utils/endpoints";

export const FormProd = ({ setModal }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputImage, setInputImage] = useState([]);
  const [inputDescription, setInputDescription] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const getTitle = (event) => setInputTitle(event.target.value);
  const getImage = (event) => setInputImage([event.target.value]);
  const getDescription = (event) => setInputDescription(event.target.value);
  const getPrice = (event) => setInputPrice(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    const body = {
      title: inputTitle,
      images: inputImage,
      description: inputDescription,
      price: parseInt(inputPrice),
      categoryId: 1,
    };
    console.log(body);
    POST("products", body).then((data) => {
      console.log(data);
    });
  };

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <input
        value={inputTitle}
        type="text"
        placeholder="Insert Title"
        onChange={(event) => getTitle(event)}
      />
      <input
        value={inputImage}
        type="text"
        placeholder="Insert Image"
        onChange={(event) => getImage(event)}
      />
      <input
        value={inputDescription}
        type="text"
        placeholder="Insert Description"
        onChange={(event) => getDescription(event)}
      />
      <input
        value={inputPrice}
        type="text"
        placeholder="Insert Price"
        onChange={(event) => getPrice(event)}
      />
      <div className={formprod.btns}>
        <button type="submit">EDIT</button>
        <button type="submit">ADD</button>
      </div>
    </form>
  );
};
