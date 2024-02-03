import { FC, useEffect, useRef } from "react";
import * as Styled from "./Calendar.styled";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Day } from "./Calendar";

interface ICalendarModal {
    setIsModalOpen(state: boolean) : void,
    isModalOpen : boolean,
    closeModal() : void,
    modalContent : Day | null,
}

const CalendarModal: FC<ICalendarModal> = ({setIsModalOpen, isModalOpen, modalContent, closeModal}) => {
    const modalRef = useRef(null);
    useEffect(() => {
        const handleEscapeKey = (event: Event): void => {
          if (event instanceof KeyboardEvent && event.key === "Escape") {
            closeModal();
          }
        };
    
        window.addEventListener("keydown", handleEscapeKey);
    
        return () => {
          window.removeEventListener("keydown", handleEscapeKey);
        };
      }, [closeModal]);
    

    useOutsideClick(modalRef, () => {
        if (isModalOpen) {
          setIsModalOpen(false);
        }
      });



    return (
         <Styled.Modal ref={modalRef} className={isModalOpen ? "open" : ""}>
    <Styled.ModalContent>
      <button className="close hover active" onClick={() => closeModal()}>
        &times;
      </button>
      <h3 className="title-modal">{`${modalContent?.day}, ${modalContent?.month}`}</h3>
      <p className="modal-paragraf modal-paragraf-one">
        Daily norm: <span className="span-modal">{modalContent?.dailyNorma}</span>
      </p>
      <p className="modal-paragraf modal-paragraf-two-three">
        Fulfillment of the daily norm:{" "}
        <span className="span-modal">{ modalContent?.percent !== undefined &&  modalContent?.percent >= 100
                  ? 100 : modalContent?.percent}%</span>
      </p>
      <p className="modal-paragraf modal-paragraf-two-three">
        How many servings of water: <span className="span-modal">{modalContent?.amountOfWater}</span>
      </p>
    </Styled.ModalContent>
  </Styled.Modal>
  )
}
export default CalendarModal