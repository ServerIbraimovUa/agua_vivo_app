import { useState } from "react";
import Modal from "../Modal/Modal";
import DailyNormaModal from "./DailyNormaModal";
import { EditButton, SpanNorma, Title, Wrapper } from "./DailyNorma.styled";
import { useSelector } from "react-redux";
import { selectDailyNorma } from "../../redux/auth/authSelectors";
import BottleImg from "../../assets/images/Bottle home screen mobile.png"

const DailyNorma: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const waterRate = useSelector(selectDailyNorma);

  return (
    <>
      <Title>My daily norma</Title>
      <Wrapper>
        <SpanNorma>{waterRate}L</SpanNorma>

        {visible && (
          <Modal setVisible={toggleModal} title="My Daily Norma" daily={true}>
            <DailyNormaModal onClose={toggleModal} />
          </Modal>
        )}
        <EditButton type="button" onClick={toggleModal}>
          Edit
        </EditButton>
      </Wrapper>
      <img src={BottleImg}/>
    </>
  );
};

export default DailyNorma;
