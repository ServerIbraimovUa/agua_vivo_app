import { useState } from "react";
import arrow from "../../../img/arrow_down.svg"
import signInLogo from "../../../img/Sign_in_def_logo.svg"
import Modal from "../../Modal/Modal";
import SettingModal from "../SettingModal/SettingModal";

const UserLogo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>
        User name
        <img src={signInLogo} alt="default_logo" width="28" height="28" />
        <img src={arrow} alt="default_logo" width="11" height="6" />
      </button>

      {visible && (
        <Modal setVisible={setVisible} title="Setting">
          <SettingModal />
        </Modal>
      )}
    </div>
  );
};

export default UserLogo;
