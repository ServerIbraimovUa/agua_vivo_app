import { FC, ReactNode } from "react";
import { Overlay } from "./Modal.styled";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#407BFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
