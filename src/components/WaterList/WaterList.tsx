import { useState } from "react";
import Modal from "../Modal/Modal";
import AddWaterForm from "./AddWaterForm/AddWaterForm";

const WaterList = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>Today</h1>
      <p>No notes yet</p>
      {visible && (
        <Modal setVisible={setVisible} title="Add water">
          <AddWaterForm />
        </Modal>
      )}
      <div>
        <button onClick={() => setVisible(true)}>Add water</button>
      </div>
      t
    </div>
  );
};

export default WaterList;
