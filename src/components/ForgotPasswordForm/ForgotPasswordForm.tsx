import { useForm } from "react-hook-form";
// import { useAppDispatch } from "../../redux/redux_ts/hook";
import {
  ForgotPassFormButton,
  StyledForgotPasswordForm,
} from "./ForgoPasswordForm.styled";
export interface Data {
  email: string;
}

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<Data>();

  //   const dispatch = useAppDispatch();

  const onSubmit = async (data: Data) => {
    console.log(data);
  };

  return (
    <StyledForgotPasswordForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Enter your email</span>
        <span className={errors.email ? "gap-error" : "gap-normal"}>
          <input
            className={errors.email ? "input-red input" : "input-blue input"}
            {...register("email", { required: true })}
            type="email"
            placeholder="E-mail"
          />
          <span className="error">
            {errors.email && <span>This field is required</span>}
          </span>
        </span>
      </label>

      <ForgotPassFormButton className="btn" type="submit">
        Send
      </ForgotPassFormButton>
    </StyledForgotPasswordForm>
  );
};

export default ForgotPasswordForm;
