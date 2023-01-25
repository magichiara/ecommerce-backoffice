import { useState } from "react";
import "./App.scss";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Modal } from "./components/modal/Modal";

const App = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <Header />
      <Main setModal={setModal} />
      {modal && <Modal setModal={setModal} />}
    </div>
  );
};

export default App;
