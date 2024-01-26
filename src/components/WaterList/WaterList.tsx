import { useState } from "react";
import Modal from "../Modal/Modal";
import AddWaterModal from "./AddWaterModal/AddWaterModal";

const WaterList = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>Today</h1>
      <p>No notes yet</p>
      <ul>
        <li>
          <p>250 ml</p>
          <p>7:00 am</p>
        </li>
        <li>
          <p>250 ml</p>
          <p>7:00 am</p>
        </li>
        <li>
          <p>250 ml</p>
          <p>7:00 am</p>
        </li>
      </ul>
      <div>
        <button onClick={() => setVisible(true)}>Add water</button>
      </div>
      {visible && (
        <Modal setVisible={setVisible} title="Add water">
          <AddWaterModal title="Choose a value" show={false} />
        </Modal>
      )}
    </div>
  );
};

export default WaterList;
