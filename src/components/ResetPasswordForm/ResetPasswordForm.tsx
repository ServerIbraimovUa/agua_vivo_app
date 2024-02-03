import { useForm } from "react-hook-form";
import Icon from "../Icon/Icon";
import togglePassword from "../../utils/togglePassword";
import { useState } from "react";
import {
  ResetPassFormButton,
  StyledResetPassForm,
  StyledResetPassFormSpan,
} from "./ResetPasswordForm.styled";

export interface Data {
  password: string;
  repeatPassword: string;
}

const ResetPasswordForm = () => {
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<Data>();

  // const dispatch = useAppDispatch();

  const onSubmit = async (data: Data) => {
    console.log(data);
  };

  return (
    <StyledResetPassForm onSubmit={handleSubmit(onSubmit)}>
      <label className={errors.password ? "gap-error" : "gap-label-normal"}>
        <span>Enter your password</span>
        <span className={errors.password ? "gap-error" : "gap-normal"}>
          <div className="eye-input">
            <input
              className={
                errors.password ? "input-red input" : "input-blue input"
              }
              {...register("password", { required: true })}
              type={toggleInput}
              placeholder="Password"
            />
            <StyledResetPassFormSpan
              onClick={() =>
                togglePassword(toggleInput, setToggleInput, setToggleIcon)
              }
            >
              {toggleIcon ? (
                <Icon className="eye-icon" id="eye" />
              ) : (
                <Icon className="eye-outline-icon" id="eye-outline" />
              )}
            </StyledResetPassFormSpan>
          </div>
          <span className="error">{errors.password?.message}</span>
        </span>
      </label>

      <label className={errors.password ? "gap-error" : "gap-label-normal"}>
        <span>Repeat password</span>
        <span className={errors.password ? "gap-error" : "gap-normal"}>
          <div className="eye-input">
            <input
              className={
                errors.password ? "input-red input" : "input-blue input"
              }
              {...register("repeatPassword", {
                required: true,
              })}
              type={toggleInput}
              placeholder="Repeat password"
            />
            <StyledResetPassFormSpan
              onClick={() =>
                togglePassword(toggleInput, setToggleInput, setToggleIcon)
              }
            >
              {toggleIcon ? (
                <Icon className="eye-icon" id="eye" />
              ) : (
                <Icon className="eye-outline-icon" id="eye-outline" />
              )}
            </StyledResetPassFormSpan>
          </div>
          <span className="error">{errors.repeatPassword?.message}</span>
        </span>
      </label>

      <ResetPassFormButton className="btn" type="submit">
        Update
      </ResetPassFormButton>
    </StyledResetPassForm>
  );
};

export default ResetPasswordForm;
