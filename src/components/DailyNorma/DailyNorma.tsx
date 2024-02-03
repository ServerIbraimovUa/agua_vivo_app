import { useState } from "react";
import Modal from "../Modal/Modal";
import DailyNormaModal from "./DailyNormaModal";
import {  EditButton, SpanNorma, Title, Wrapper, WrapperButton,WrapperImg } from "./DailyNorma.styled";
import { useSelector } from "react-redux";
import { selectDailyNorma } from "../../redux/auth/authSelectors";

const DailyNorma: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const waterRate = useSelector(selectDailyNorma);

  return (
    <>
       <WrapperImg>
      <Wrapper>
      <Title>My daily norma</Title>
      <WrapperButton>
        <SpanNorma>{waterRate} L</SpanNorma>
        {visible && (
          <Modal setVisible={toggleModal} title="My Daily Norma" daily={true}>
            <DailyNormaModal onClose={toggleModal} />
          </Modal>
        )}
        <EditButton type="button" onClick={toggleModal}>
          Edit
        </EditButton>
      </WrapperButton>
      </Wrapper>
     </WrapperImg>
    </>
  );
};

export default DailyNorma;
