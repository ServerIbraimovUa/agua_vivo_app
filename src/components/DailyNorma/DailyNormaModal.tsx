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
      sex:user.gender||"woman",
      dailyNorma: user.dailyNorma||undefined,
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
  const weight = Number(watch("weight"))
  const time = Number(watch("time"));
  const sex = String(watch("sex"));

  const calculateDailyNorma = (w: number, t: number, g: string): string => {
  
    if (g === "man") {
      return String((w * 0.04 + t * 0.6).toFixed(1))+"L";
    } else {
      return String((w * 0.03 + t * 0.4).toFixed(1))+"L";
    }
  };

  const createPopoverMessage = (w:number, t:number) : string|undefined=>{
    if(w<20 && w!==0){
    visible=true;
    return "You couldn't be less than 20kg";
    }
    if(t>24){
      visible=true;
      return "Day contains only 24H";
    }
    if(t<0){
      visible=true;
      return "Time should be only positive integer";
    }
   }

  const myDailyNorma = calculateDailyNorma(weight, time, sex);
  const message = createPopoverMessage(weight, time);
  
 
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <FormSubHeader>
            <p>
              For girl:<Span>V=(M*0,03) + (T*0,4)</Span>
            </p>
            <p>
              For man:<Span>V=(M*0,04) + (T*0,6)</Span>
            </p>
          </FormSubHeader>
          <FormHeaderText>
            * V is the volume of the water norm in liters per day, M is your
            body weight, T is the time of active sports, or another type of
            activity commensurate in terms of loads (in the absence of these,
            you must set 0)
          </FormHeaderText>
        </FormHeader>
        <FormBody>
          <FormSubtitle>Calculate your rate:</FormSubtitle>
          <FormSub>
            <label>
              <FormRadioInput
                {...register("sex")}
                value="woman"
                type="radio"
              />
              For woman
            </label>
            <label>
              <FormRadioInput
                {...register("sex")}
                value="man"
                type="radio"
              />
              For man
            </label>
          </FormSub>
          <Label>
            <span>Your weight in kilograms:</span>
            <Input
              {...register("weight")}
              type="number"
              placeholder="0"           
              
            />
          </Label>
          <Label>
            <span>
              The time of active participation in sports or other activities
              with a high physical. load in hours:
            </span>
            <Input
              {...register("time")}
              type="number"
              placeholder="0"             
            />
          </Label>
          <LabelNorma>
            <SpanText>The required amount of water in liters per day:</SpanText>
            <Span>{visible?(<Popover message={message} dailyNorma={true}/>):myDailyNorma}</Span>
          </LabelNorma>
        </FormBody>
        <FormFooter>
          <Label>
            <FormSubtitle>
              Write down how much water you will drink:
            </FormSubtitle>
            <Input  {...register("dailyNorma", {
                    required: true,
                  })} 
            type="number" step="any" 
            min={0}
            max={15}
            placeholder="0"/>
            {errors.dailyNorma && <span>This field is required</span>}
          </Label>
        </FormFooter>
        <FormButton className="btn" type="submit">
          Save
        </FormButton>
      </Form>
    </FormContainer>
  );
};

export default DailyNormaModal;
