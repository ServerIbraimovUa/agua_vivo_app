import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormBody, FormButton, FormContainer, FormFooter, FormHeader,FormHeaderText, FormRadioInput, FormSub, FormSubHeader, FormSubtitle, Input, Label, LabelNorma, Span, SpanText } from "./DailyNorma.styled";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import { updateDailyNorma } from "../../redux/auth/auth.operations";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";


interface Props {
  onClose: () => void;  
}

type Inputs = {
  weight: string
  time: string
  sex?: "Man" | "Woman"
  dailyNorma:string
}

const DailyNormaModal: FC<Props>= ({onClose}) => {
const {gender}=useSelector(selectUser);
console.log(gender);

  const {
    register,
    handleSubmit,     
    watch,       
    formState: { errors },
  } = useForm<Inputs>(
    {defaultValues: {
        weight: "",
        time:"",
        //sex:gender,
        dailyNorma:""
      },
      mode: "onChange"}
  )

   const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {dailyNorma}=data;
    console.log(dailyNorma);
    dispatch(updateDailyNorma(dailyNorma));
    onClose();
  }

  const weight=Number(watch("weight"));
  const time=Number(watch("time"));
  const sex=String(watch("sex"));

  const calculateDailyNorma =(w: number, t: number, g:string): string =>{
    if(g==="Man"){
        return String(((w*0.04)+(t*0.6)).toFixed(1));
    }
    else{
        
        return String(((w*0.03)+(t*0.4)).toFixed(1));
    }

  };

  const myDailyNorma=calculateDailyNorma(weight,time, sex);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
            <FormSubHeader>
                <p>For girl:<Span>V=(M*0,03) + (T*0,4)</Span></p>
                <p>For man:<Span>V=(M*0,04) + (T*0,6)</Span></p>
            </FormSubHeader>
                <FormHeaderText>* V is the volume of the water norm in liters per day, M is your body weight, 
                    T is the time of active sports, or another type of activity commensurate in terms of loads 
                    (in the absence of these, you must set 0)
                </FormHeaderText>
        
        </FormHeader>
        <FormBody>
        <FormSubtitle>Calculate your rate:</FormSubtitle>
        <FormSub>
            <label>
            <FormRadioInput
              {...register("sex", {
                required: "Please select a gender",
              })}
              value="Woman"
              type="radio"
              
            />
            For woman
            </label>
            <label>
            <FormRadioInput
              {...register("sex", {
                required: "Please select a gender",
              })}
              value="Man"
              type="radio"
            />
            For man
            </label>
        </FormSub>
      <Label>
        <span>Your weight in kilograms:</span>      
      <Input {...register("weight", { min:20, max:320 })}
      type="number"      
      placeholder="0"/>
      </Label>
      <Label>
        <span>The time of active participation in sports or other activities with a high physical. load in hours:</span>
      <Input {...register("time", { max:24 })} 
      type="number"
      placeholder="0"/>
      </Label>
      <LabelNorma>
      <SpanText>The required amount of water in liters per day:</SpanText>
      <Span>{myDailyNorma} L</Span>
      </LabelNorma>
      </FormBody>
     <FormFooter>
    <Label>
        <FormSubtitle>Write down how much water you will drink:</FormSubtitle>
        <Input {...register("dailyNorma", { max:15 })} 
        type="number"
        />
      {errors.dailyNorma && <span>This field is required</span>}
    </Label>
     </FormFooter>
      <FormButton className="btn" type="submit">Save</FormButton>
    </Form>
    </FormContainer>
  );
};

export default DailyNormaModal;
