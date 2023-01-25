import form from "./form.module.scss";
import { useState } from "react";
import { POST } from "../../utils/endpoints";

export const Form = ({ setModal }) => {
  const [inputName, setInputName] = useState("");
  const [inputImage, setInputImage] = useState("");

  const getName = (event) => setInputName(event.target.value);
  const getImage = (event) => setInputImage(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    const body = { name: inputName, image: inputImage };
    POST("categories", body).then((data) => {
      console.log(data);
      if (data.status > 199 && data.status < 400) {
        setModal(false);
      }
    });
  };

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <input
        type="text"
        value={inputName}
        placeholder="Insert Name"
        onChange={(event) => getName(event)}
      />
      <input
        type="text"
        value={inputImage}
        placeholder="Insert Image"
        onChange={(event) => getImage(event)}
      />
      <div className={form.btns}>
        <button type="submit">EDIT</button>
        <button type="submit">ADD</button>
      </div>
    </form>
  );
};
