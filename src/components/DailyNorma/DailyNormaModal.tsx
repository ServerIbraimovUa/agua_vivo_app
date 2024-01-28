import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormBody, FormButton, FormContainer, FormFooter, FormHeader,FormHeaderText, FormRadioInput, FormSub, FormSubtitle, Input, Label, Span } from "./DailyNorma.styled";


interface Props {
  onClose: () => void;  
}

type Inputs = {
  weight: string
  time: string
  gender?: "male" | "female"
  quantity:string
  dailyNorma:string

}

const DailyNormaModal: FC<Props>= ({onClose}) => {
  const {
    register,
    handleSubmit,  
    getValues,    
    formState: { errors },
  } = useForm<Inputs>(
    {defaultValues: {
        weight: "0",
        time:"0",
        gender:"female"
      },
      mode: "onChange"}
  )

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    onClose();
  }
  const weight=Number(getValues("weight"));
  const time=Number(getValues("time"));
const gender=String(getValues("gender"));

  const calculateDailyNorma =(w: number, t: number, g:string): string =>{
    if(g==="male"){
        return String(((w*0.04)+(t*0.6)).toFixed(1));
    }
    else{
        
        return String(((w*0.03)+(t*0.4)).toFixed(1));
    }

  };

  const myDailyNorma=calculateDailyNorma(weight,time,gender);


  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
            <FormSub>
                <p>For girl:<Span>V=(M*0,03) + (T*0,4)</Span></p>
                <p>For man:<Span>V=(M*0,04) + (T*0,6)</Span></p>
            </FormSub>
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
              {...register("gender", {
                required: "Please select a gender",
              })}
              value="female"
              type="radio"
              
            />
            For woman
            </label>
            <label>
            <FormRadioInput
              {...register("gender", {
                required: "Please select a gender",
              })}
              value="male"
              type="radio"
            />
            For man
            {errors.gender && <span>This field is required</span>}
            </label>
        </FormSub>
      <Label>
        <span>Your weight in kilograms:</span>      
      <Input {...register("weight", { required: true })}/>
      {errors.weight && <span>This field is required</span>}
      </Label>
      <Label>
        <span>The time of active participation in sports or other activities with a high physical. load in hours:</span>
      <Input {...register("time", { required: true })} />
      {errors.time && <span>This field is required</span>}
      </Label>
      <label>
      The required amount of water in liters per day:
     <Span>`{myDailyNorma} L`</Span>
      </label>
      </FormBody>
     <FormFooter>
    <Label>
        <FormSubtitle>Write down how much water you will drink:</FormSubtitle>
        <Input {...register("quantity", { required: true })} />
      {errors.quantity && <span>This field is required</span>}
    </Label>
     </FormFooter>
      <FormButton type="submit">Save</FormButton>
    </Form>
    </FormContainer>
  );
};

export default DailyNormaModal;
