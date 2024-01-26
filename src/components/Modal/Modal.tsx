import { FC, ReactNode } from "react";
import { Overlay } from "./Modal.styled";
import Icon from "../Icon/Icon";

interface Props {
  setVisible: (boolean: boolean) => void;
  title: string;
  children: ReactNode;
}

const Modal: FC<Props> = ({ setVisible, title, children }) => {
  return (
    <Overlay>
      <div className="modal">
        <div className="header">
          <p>{title}</p>
          <button onClick={() => setVisible(false)}>
            <Icon className="modal-icon" id="close" />
          </button>
        </div>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
