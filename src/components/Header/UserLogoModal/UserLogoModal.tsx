import { useRef, useState } from "react";
import arrow from "../../../img/arrow_down.svg";
import SettingModal from "../SettingModal/SettingModal";
import Modal from "../../Modal/Modal";
import UserLogoutModal from "../UserLogoutModal/UserLogoutModal";
import { LogoWrapper } from "./UserLogoModal.styled";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const UserLogoModal = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [settingsVisible, setsettingsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    if (anchorEl) {
      setTimeout(() => setAnchorEl(false), 100);
    }
  });

  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };

  return (
    <LogoWrapper>
      <button className="open-btn" onClick={handleClick}>
        User name
        <img
          className="user-photo"
          src="/agua_vivo_app/src/img/Sign_in_def_logo.svg"
          alt="default_logo"
          width="28"
          height="28"
        ></img>
        <img
          className="arrow"
          src={arrow}
          alt="default_logo"
          width="11"
          height="6"
        />
      </button>
      <div className={`btn-down ${anchorEl ? "open" : ""}`} ref={menuRef}>
        <button onClick={() => setsettingsVisible(true)}>Settings</button>
        {settingsVisible && (
          <Modal setVisible={setsettingsVisible} title="Setting">
            <SettingModal />
          </Modal>
        )}
        <br />
        <button onClick={() => setVisible(true)}>Log out</button>
        {visible && (
          <Modal setVisible={setVisible} title="Log out">
            <UserLogoutModal />
          </Modal>
        )}
      </div>
    </LogoWrapper>
  );
};

export default UserLogoModal;
