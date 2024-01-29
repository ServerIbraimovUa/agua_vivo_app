import { useState } from "react";
import Modal from "../Modal/Modal";
import DailyNormaModal from "./DailyNormaModal";

const DailyNorma: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const toggleModal = () => {
        setVisible(!visible);
      };

  return (
    <>
    <h3>My daily norma</h3>
    <p>2L</p>

    {visible && (
        <Modal setVisible={toggleModal} title="My Daily Norma">
          <DailyNormaModal onClose={toggleModal}/>
        </Modal>
      )}
    <button type="button" onClick={toggleModal}>Edit</button>
    </>
  );
};

export default DailyNorma;