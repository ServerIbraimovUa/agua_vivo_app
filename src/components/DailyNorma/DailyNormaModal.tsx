import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormBody,
  FormButton,
  FormContainer,
  FormFooter,
  FormHeader,
  FormHeaderText,
  FormRadioInput,
  FormSub,
  FormSubHeader,
  FormSubtitle,
  Input,
  Label,
  LabelNorma,
  Span,
  SpanText,
} from "./DailyNorma.styled";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import { updateUserDailyNormaThunk } from "../../redux/auth/auth.operations";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import Popover from "../Popover/Popover";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

interface Props {
  onClose: () => void;
}

type Inputs = {
  weight: string;
  time: string;
  sex?: "man" | "woman";
  dailyNorma: number;
};

const DailyNormaModal: FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();
  const user = useSelector(selectUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      weight: "",
      time: "",
      sex: user.gender || "woman",
      dailyNorma: user.dailyNorma || undefined,
    },
    mode: "onChange",
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { dailyNorma } = data;

    dispatch(updateUserDailyNormaThunk({ dailyNorma: +dailyNorma }));
    onClose();
  };

  let visible;
  const weight = Number(watch("weight"));
  const time = Number(watch("time"));
  const sex = String(watch("sex"));

  const calculateDailyNorma = (w: number, t: number, g: string): string => {
    if (g === "man") {
      return String((w * 0.04 + t * 0.6).toFixed(1));
    } else {
      return String((w * 0.03 + t * 0.4).toFixed(1));
    }
  };

  const createPopoverMessage = (w: number, t: number): string | undefined => {
    if (w < 20 && w !== 0) {
      visible = true;
      return i18n.t("dailyModal.couldnt");
    }
    if (t > 24) {
      visible = true;
      return i18n.t("dailyModal.24h");
    }
    if (t < 0) {
      visible = true;
      return i18n.t("dailyModal.positive");
    }
  };

  const myDailyNorma = calculateDailyNorma(weight, time, sex);
  const message = createPopoverMessage(weight, time);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <FormSubHeader>
            <p>
              {t("dailyModal.girl")}
              <Span>
                {t("dailyModal.volume")}=({t("dailyModal.masse")}*0,03) + (
                {t("dailyModal.time")}*0,4)
              </Span>
            </p>
            <p>
              {t("dailyModal.man")}
              <Span>
                {t("dailyModal.volume")}=({t("dailyModal.masse")}*0,04) + (
                {t("dailyModal.time")}*0,6)
              </Span>
            </p>
          </FormSubHeader>
          <FormHeaderText>{t("dailyModal.formule")}</FormHeaderText>
        </FormHeader>
        <FormBody>
          <FormSubtitle>{t("dailyModal.calculate")}</FormSubtitle>
          <FormSub>
            <label>
              <FormRadioInput {...register("sex")} value="woman" type="radio" />
              {t("dailyModal.forWoman")}
            </label>
            <label>
              <FormRadioInput {...register("sex")} value="man" type="radio" />
              {t("dailyModal.forMan")}
            </label>
          </FormSub>
          <Label>
            <span>{t("dailyModal.weight")}</span>
            <Input {...register("weight")} type="number" placeholder="0" />
          </Label>
          <Label>
            <span>{t("dailyModal.activeTime")}</span>
            <Input {...register("time")} type="number" placeholder="0" />
          </Label>
          <LabelNorma>
            <SpanText>{t("dailyModal.required")}</SpanText>
            <Span>
              {visible ? (
                <Popover message={message} dailyNorma={true} />
              ) : (
                `${myDailyNorma}${t("homepage.litres")}`
              )}
            </Span>
          </LabelNorma>
        </FormBody>
        <FormFooter>
          <Label>
            <FormSubtitle>{t("dailyModal.wanted")}</FormSubtitle>
            <Input
              {...register("dailyNorma", {
                required: true,
              })}
              type="number"
              step="any"
              min={0}
              max={15}
              placeholder="0"
            />
            {errors.dailyNorma && <span>{t("dailyModal.field")}</span>}
          </Label>
        </FormFooter>
        <FormButton className="btn" type="submit">
          {t("addWater.save")}
        </FormButton>
      </Form>
    </FormContainer>
  );
};

export default DailyNormaModal;
