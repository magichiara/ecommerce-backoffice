import { useState } from "react";
import "./App.scss";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Modal } from "./components/modal/Modal";
import { Form } from "./components/form/Form";
import { FormProd } from "./components/form-prod/FormProd";

const modalChildrenObj = {
  categories: Form,
  products: FormProd,
};

const App = () => {
  const [modal, setModal] = useState(false);
  const [modalChildren, setModalChildren] = useState("");

  const DynamicModal = modalChildrenObj[modalChildren];

  return (
    <div className="App">
      <Header />
      <Main setModal={setModal} setModalChildren={setModalChildren} />
      {modal && <Modal setModal={setModal} children={<DynamicModal />} />}
    </div>
  );
};

export default App;
