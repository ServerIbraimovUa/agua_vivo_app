import { useForm } from "react-hook-form";
// import { useAppDispatch } from "../../redux/redux_ts/hook";
import {
  ForgotPassFormButton,
  StyledForgotPasswordForm,
} from "./ForgoPasswordForm.styled";
import { forgotPasswordThunk } from "../../redux/auth/auth.operations";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import { toast } from "react-toastify";
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

  const dispatch = useAppDispatch();

  const onSubmit = async (data: Data) => {
    dispatch(forgotPasswordThunk(data))
      .unwrap()
      .then(() => {
        toast.success("Email was successfully sent");
      })
      .catch((e) => {
        if (e.includes("409")) {
          toast.error("Email wasn't sent");
        }
      });
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
