import { FormEvent, useState } from "react";
import Modal from "../Modal/Modal";
import AddWaterModal from "./AddWaterModal/AddWaterModal";
import { selectAllWater } from "../../redux/water/waterSelectors";
import { useSelector } from "react-redux";
import {
  addWater,
  deleteWater,
  updateWaterVolume,
} from "../../redux/water/water.operations";
import Icon from "../Icon/Icon";
import { useAppDispatch } from "../../redux/redux_ts/hook";

interface FormElements extends HTMLFormControlsCollection {
  waterVolume: HTMLInputElement;
  date: HTMLInputElement;
}

export interface INewPortion {
  waterVolume: string;
  date: string;
}

export interface IWaterData {
  waterList: {
    waterVolume: number;
    date: number;
    waterId: number;
  };
}

const WaterList = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const waterList = useSelector(selectAllWater);
  // console.log(waterList);

  const handleAddWater = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.currentTarget.elements as FormElements;
    console.dir(elements);
    const waterVolume = elements.waterVolume.value;
    const date = elements.date.value;

    const newPortion: INewPortion = {
      waterVolume,
      date,
    };

    dispatch(addWater(newPortion));
  };

  const handleDeleteWater = (waterID: number) => {
    dispatch(deleteWater(waterID));
  };

  const handleUpdateWater = (waterData: IWaterData) => {
    dispatch(updateWaterVolume(waterData));
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div>
      <h1>Today</h1>

      {!waterList ? (
        <p>No notes yet</p>
      ) : (
        waterList.map(({ waterVolume, date, waterId, waterData }) => {
          return (
            <li key={waterId}>
              <span>
                <Icon className="water-glass-icon" id="icon-water"></Icon>
              </span>
              <p>{waterVolume}</p>
              <p>{date}</p>
              <button
                type="button"
                className="edit-btn"
                onClick={() => handleUpdateWater(waterData)}
              >
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
                <Icon className="edit-water-icon" id="icon-pencil"></Icon>
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteWater(waterId)}
              >
                <Icon className="delete-water-icon" id="icon-delete"></Icon>
              </button>
            </li>
          );
        })
      )}

      <ul>
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
          <AddWaterModal
            title="Choose a value"
            show={false}
            handleAddWater={handleAddWater}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default WaterList;

//  Type `(e: FormEvent<HTMLFormElement>) => void" is not assignable to type "() => void". Type signature provides too few arguments. Expected 1 or more , but got 0  {title: string: show: falls: onSubmit:  => void; }  "InterestingAttributes & Props".  property "onSubmit" doesn't exist on type "InterestingAttributes & Props".
//   //Argument of type "AsuncThunkAction<any, void, AsuncThunkConfig>" is not assignable to parameter of type "UnknownAction"
