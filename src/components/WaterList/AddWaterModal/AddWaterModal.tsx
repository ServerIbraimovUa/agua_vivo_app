import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/redux_ts/hook";
import { AddWaterModalStyled } from "../WaterList.styled";
import Icon from "../../Icon/Icon";
import { addWaterThunk } from "../../../redux/water/water.operations";
import { selectAmountDaily } from "../../../redux/water/waterSelectors";
import Popover from "../../Popover/Popover";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/i18n";
import { generateTimeOptions } from "../../../utils/timePicker";
import Select, { SingleValue } from "react-select";

interface IProps {
  id?: string;
  title: string;
  show?: boolean;
  closeModal: () => void;
}
export interface IOptions {
  value: string | undefined;
  label: string | undefined;
}

export interface IWaterPortion {
  time: string | undefined;
  waterVolume: number;
}

const AddWaterModal: FC<IProps> = ({ title, closeModal }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IWaterPortion>({
    mode: "onChange",
  });

  const dispatch = useAppDispatch();

  const { entries } = useSelector(selectAmountDaily);

  const [state, setState] = useState({
    count: entries.length > 0 ? 250 : 0,
    inputValue: entries.length > 0 ? "250" : "0",
  });

  const arr: IOptions[] = [];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const timeOptions = generateTimeOptions();

  const [option, setOption] = useState<string | undefined>(timeOptions[0]);

  const amountWater = state.inputValue;

  const waterVolume = getValues("waterVolume");
  const chosenTime = option?.slice(3, 5);

  const firstTime = timeOptions[0].slice(3, 5).toString();

  const changeSelect = (e: SingleValue<IOptions>) => {
    setOption(e?.value);
  };

  const handleCountChange = (newCount: number) => {
    if (state.count + newCount >= 0) {
      setState({
        inputValue: String(newCount),
        count: newCount,
      });
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setState((prevState) => ({
      ...prevState,
      inputValue: value,
    }));
  };

  const handleInputBlur = () => {
    handleCountChange(Number(state.inputValue));
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "-") {
      event.preventDefault();
    }
  };

  const onSubmit: SubmitHandler<IWaterPortion> = () => {
    const newData = {
      time: option,
      waterVolume: Number(state.inputValue),
    };

    if (errors.waterVolume) {
      return;
    }

    if (newData.waterVolume === 0) {
      return;
    }

    if (Number(chosenTime) % 5 !== 0) {
      return;
    }
    message = createPopoverMessage(option, waterVolume, firstTime);

    dispatch(addWaterThunk(newData));
    closeModal();
  };

  let visible = false;
  const createPopoverMessage = (
    t: string | undefined,
    w: number,
    f: string
  ): string | undefined => {
    if (w === 0) {
      visible = true;

      return i18n.t("addWater.zero");
    }
    if (Number(t) % 5 !== 0 && Number(f) % 5 !== 0) {
      visible = true;
      return i18n.t("addWater.divide");
    }
  };

  let message = createPopoverMessage(
    chosenTime,
    Number(amountWater),
    firstTime
  );

  timeOptions.map((option) => arr.push({ value: option, label: option }));

  return (
    <AddWaterModalStyled>
      <h2 className="add-water-title">{title}</h2>
      <div className="counter-box">
        <p className="">{t("addWater.water")}</p>
        <div className="counter-btn-box">
          <button
            className="counter-btn"
            onClick={() => handleCountChange(state.count - 50)}
            type="button"
          >
            <Icon className="icon-minus" id="minus" />
          </button>
          <span className="water-amount-span">
            {state.count} {t("addWater.ml")}
          </span>
          <button
            className="counter-btn"
            onClick={() => handleCountChange(state.count + 50)}
            type="button"
          >
            <Icon className="icon-plus" id="plus" />
          </button>
        </div>
      </div>
      <form className="add-water-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="water-label">
          <span className="popover">{t("addWater.time")}</span>
          {visible && <Popover message={message} waterAmount={true} />}
          <Select
            defaultValue={arr[0]}
            options={arr}
            onChange={changeSelect}
            styles={{
              control: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                height: "44px",
                width: windowWidth > 767 ? "100%" : "120px",
                border: `2px solid ${isFocused ? "#D7E3FF" : "#D7E3FF"}`,
                "&:hover": {
                  borderColor: "#D7E3FF",
                },
              }),
              singleValue: (baseStyles) => ({
                ...baseStyles,
                color: "#407BFF",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                height: "150px",
                overflowY: "hidden",
                backgroundColor: "#D7E3FF",
                color: "#407BFF",
              }),
            }}
          />
        </label>
        <label className="water-label">
          <span className="enter-water-span">{t("addWater.used")}</span>

          <input
            {...register("waterVolume", { required: true })}
            type="number"
            min={0}
            max={5000}
            step={50}
            name="waterVolume"
            value={state.inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleInputKeyPress}
            placeholder="0"
            className="water-input"
          />
        </label>

        <div className="btn-container">
          <span className="water-amount">{`${state.count}${t(
            "addWater.ml"
          )}`}</span>
          <button type="submit" className="save-btn">
            {t("addWater.save")}
          </button>
        </div>
      </form>
    </AddWaterModalStyled>
  );
};

export default AddWaterModal;
