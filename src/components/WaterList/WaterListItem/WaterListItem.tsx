// import { useSelector } from "react-redux";
// import { selectAllWater } from "../../../redux/water/waterSelectors";
import { IWaterData } from "../WaterList";
import { FC, useState } from "react";
import Icon from "../../Icon/Icon";
import Modal from "../../Modal/Modal";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";

interface IProps {
  show: boolean;
  handleDeleteWater: (waterId: string) => void;
  handleUpdateWater?: (waterData: IWaterData) => void;
  closeModal: () => void;
  waterList: IWaterData[];
}

const WaterListItem: FC<IProps> = ({
  //   show,
  handleDeleteWater,
  handleUpdateWater,
  closeModal,
  waterList,
}) => {
  const [visible, setVisible] = useState(false);
  // const waterList = useSelector(selectAllWater);

  return (
    <>
      {waterList.map((item) => {
        return (
          <li key={item.id}>
            <span>
              <Icon className="water-glass-icon" id="water"></Icon>
            </span>
            <p>{item.waterVolume}</p>
            {/* <p>{item.waterList.date}</p> */}
            <button
              type="button"
              className="edit-btn"
              // onClick={() => handleUpdateWater(waterData)}
            >
              <Icon className="edit-water-icon" id="pencil"></Icon>
            </button>
            {visible && (
              <Modal
                setVisible={setVisible}
                title="Edit the entered amount of water"
              >
                <AddWaterModal
                  title="Choose a value"
                  show={false}
                  handleUpdateWater={handleUpdateWater}
                  closeModal={closeModal}
                />
              </Modal>
            )}
            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDeleteWater(item.id)}
            >
              <Icon className="delete-water-icon" id="delete"></Icon>
            </button>
            {visible && (
              <Modal setVisible={setVisible} title="Delete water">
                <DeleteWaterModal
                  id={item.id}
                  handleDeleteWater={handleDeleteWater}
                  closeModal={closeModal}
                  title="Delete entry?"
                  //   show={false}
                />
              </Modal>
            )}
          </li>
        );
      })}
    </>
  );
};

export default WaterListItem;
