import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { logInThunk, registerThunk } from "../../redux/auth/auth.operations";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import Icon from "../Icon/Icon";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchemas } from "../../schemas/authSchemas";
import togglePassword from "../../utils/togglePassword";
import {
  AuthFormButton,
  StyledAuthForm,
  StyledAuthFormSpan,
} from "./AuthForm.styled";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export interface Data {
  email: string;
  password: string;
  repeatPassword?: string;
}
interface Props {
  repeat: boolean;
}

const AuthForm: FC<Props> = ({ repeat }) => {
  const { t } = useTranslation();
  const [passwordToggleInput, setPasswordToggleInput] = useState("password");
  const [passwordToggleIcon, setPasswordToggleIcon] = useState(false);

  const [repeatPasswordToggleInput, setRepeatPasswordToggleInput] =
    useState("password");
  const [repeatPasswordToggleIcon, setRepeatPasswordToggleIcon] =
    useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(authSchemas(repeat)),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: Data) => {
    const { email, password } = data;
    const newData = {
      email,
      password,
    };

    repeat
      ? dispatch(registerThunk(newData))
          .unwrap()
          .then((data) => {
            console.log(data);
            if (data.user.verificationToken) {
              navigate(
                `/verify/${data.user.verificationToken}?email=${data.user.email}`
              );
            } else {
              toast.success(`${t("signup.notifySuccess")}`);
              navigate("/home");
            }
          })
          .catch((e) => {
            if (e.includes("409")) {
              toast.error(`${t("signup.notifyError")}`);
            }
          })
      : dispatch(logInThunk(newData))
          .unwrap()
          .then(() => {
            toast.success(`${t("signin.notifySuccess")}`);
            reset();
          })
          .catch(() => {
            toast.error(`${t("signin.notifyError")}`);
          });
  };

  return (
    <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>{t("signin.label1")}</span>
        <span className={errors.email ? "gap-error" : "gap-normal"}>
          <input
            className={errors.email ? "input-red input" : "input-blue input"}
            {...register("email", { required: true })}
            type="email"
            placeholder={t("authPlaceholders.email")}
          />
          <span className="error">
            {errors.email && <span>{errors.email?.message}</span>}
          </span>
        </span>
      </label>

      <label className={errors.password ? "gap-error" : "gap-label-normal"}>
        <span>{t("signin.label2")}</span>
        <span className={errors.password ? "gap-error" : "gap-normal"}>
          <div className="eye-input">
            <input
              className={
                errors.password ? "input-red input" : "input-blue input"
              }
              {...register("password", { required: true })}
              type={passwordToggleInput}
              placeholder={t("authPlaceholders.password")}
            />
            <StyledAuthFormSpan
              onClick={() =>
                togglePassword(
                  passwordToggleInput,
                  setPasswordToggleInput,
                  setPasswordToggleIcon
                )
              }
            >
              {passwordToggleIcon ? (
                <Icon className="eye-icon" id="eye" />
              ) : (
                <Icon className="eye-outline-icon" id="eye-outline" />
              )}
            </StyledAuthFormSpan>
          </div>
          <span className="error">{errors.password?.message}</span>
        </span>
      </label>

      {repeat && (
        <>
          <label className={errors.password ? "gap-error" : "gap-label-normal"}>
            <span>{t("signin.label3")}</span>
            <span className={errors.password ? "gap-error" : "gap-normal"}>
              <div className="eye-input">
                <input
                  className={
                    errors.password ? "input-red input" : "input-blue input"
                  }
                  {...register("repeatPassword", {
                    required: true,
                  })}
                  type={repeatPasswordToggleInput}
                  placeholder={t("signin.label3")}
                />
                <StyledAuthFormSpan
                  onClick={() =>
                    togglePassword(
                      repeatPasswordToggleInput,
                      setRepeatPasswordToggleInput,
                      setRepeatPasswordToggleIcon
                    )
                  }
                >
                  {repeatPasswordToggleIcon ? (
                    <Icon className="eye-icon" id="eye" />
                  ) : (
                    <Icon className="eye-outline-icon" id="eye-outline" />
                  )}
                </StyledAuthFormSpan>
              </div>
              <span className="error">{errors.repeatPassword?.message}</span>
            </span>
          </label>
        </>
      )}

      <AuthFormButton className="btn" type="submit">
        {repeat ? `${t("signin.signup")}` : `${t("signin.title")}`}
      </AuthFormButton>
    </StyledAuthForm>
  );
};

export default AuthForm;
