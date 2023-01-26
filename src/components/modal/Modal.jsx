import modal from "./modal.module.scss";
import { CgClose } from "react-icons/cg";

export const Modal = ({ setModal, children }) => {
  return (
    <div className={modal.main}>
      <div onClick={() => setModal(false)} className={modal.close}>
        <CgClose />
      </div>
      {children}
    </div>
  );
};
