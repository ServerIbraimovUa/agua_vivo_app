import { useState } from "react";
import Modal from "../components/Modal/Modal";
import WaterList from "../components/WaterList/WaterList";

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>HomePage</div>
      <WaterList />
      {visible && (
        <Modal setVisible={setVisible} title="Sign up">
          <div>content</div>
        </Modal>
      )}
      <div>
        <button onClick={() => setVisible(true)}>Open</button>
      </div>
    </>
  );
};

export default HomePage;
