import modal from "./modal.module.scss";
import { CgClose } from "react-icons/cg";
import { Form } from "../form/Form";

export const Modal = ({ setModal }) => {
  return (
    <div className={modal.main}>
      <div onClick={() => setModal(false)} className={modal.close}>
        <CgClose />
      </div>
      <Form setModal={setModal} />
    </div>
  );
};
