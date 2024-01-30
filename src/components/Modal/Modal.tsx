import { FC, ReactNode, useEffect } from "react";
import { Overlay } from "./Modal.styled";
import Icon from "../Icon/Icon";

interface Props {
  setVisible: (boolean: boolean) => void;
  title: string;
  children: ReactNode;
  setting?: boolean;
  logout?: boolean;
  daily?: boolean;
  delete?: boolean;
}

const Modal: FC<Props> = ({ setVisible, title, children, ...arg }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setVisible]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      setVisible(false);
    }
  };

  return (
    <Overlay
      onClick={handleBackdropClick}
      $setting={arg.setting}
      $daily={arg.daily}
      $logout={arg.logout}
      $delete={arg.delete}
    >
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
