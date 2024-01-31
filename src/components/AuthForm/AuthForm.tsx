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
export interface Data {
  email: string;
  password: string;
  repeatPassword?: string;
}
interface Props {
  repeat: boolean;
}

const AuthForm: FC<Props> = ({ repeat }) => {
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(authSchemas(repeat)),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: Data) => {
    const { email, password } = data;
    const newData = {
      email,
      password,
    };

    repeat
      ? dispatch(registerThunk(newData))
      : dispatch(logInThunk(newData))
          .unwrap()
          .then(() => {
            alert(`Welcome to your account!`), reset();
          })
          .catch((err) => {
            console.log(err);
            alert(`Please write the correct Email or Password`);
          });
  };

  return (
    <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Enter your email</span>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="E-mail"
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        <span>Enter your password</span>
        <div className="eye-input">
          <input
            {...register("password", { required: true })}
            type={toggleInput}
            placeholder="Password"
          />
          <StyledAuthFormSpan
            onClick={() =>
              togglePassword(toggleInput, setToggleInput, setToggleIcon)
            }
          >
            {toggleIcon ? (
              <Icon className="eye-icon" id="eye" />
            ) : (
              <Icon className="eye-outline-icon" id="eye-outline" />
            )}
          </StyledAuthFormSpan>
        </div>

        {errors.password?.message}
      </label>
      {repeat && (
        <>
          <label>
            <span>Repeat password</span>
            <div className="eye-input">
              <input
                {...register("repeatPassword", {
                  required: true,
                })}
                type={toggleInput}
                placeholder="Repeat password"
              />
              <StyledAuthFormSpan
                onClick={() =>
                  togglePassword(toggleInput, setToggleInput, setToggleIcon)
                }
              >
                {toggleIcon ? (
                  <Icon className="eye-icon" id="eye" />
                ) : (
                  <Icon className="eye-outline-icon" id="eye-outline" />
                )}
              </StyledAuthFormSpan>
            </div>

            {errors.repeatPassword?.message}
          </label>
        </>
      )}

      <AuthFormButton className="btn" type="submit">
        {repeat ? "Sign Up" : "Sign In"}
      </AuthFormButton>
    </StyledAuthForm>
  );
};

export default AuthForm;
