import { useForm } from "react-hook-form";
import Icon from "../Icon/Icon";
import togglePassword from "../../utils/togglePassword";
import { useState } from "react";
import {
  ResetPassFormButton,
  StyledResetPassForm,
  StyledResetPassFormSpan,
} from "./ResetPasswordForm.styled";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import { resetPasswordThunk } from "../../redux/auth/auth.operations";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export interface Data {
  password: string;
  repeatPassword: string;
}

const ResetPasswordForm = () => {
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) return;

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<Data>();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: Data) => {
    dispatch(resetPasswordThunk({ password: data.password, id }))
      .unwrap()
      .then(() => {
        toast.success("Password was changed successfully");
        navigate("/signin");
      })
      .catch((e) => {
        if (e.includes("409")) {
          toast.error("Password  wasn't changed");
        }
      });
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
