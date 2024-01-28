import { FC } from "react";
import { useForm } from "react-hook-form";
import { logInThunk, registerThunk } from "../../redux/auth/auth.operations";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface Data {
  email: string;
  password: string;
  repeatPassword?: string;
}
interface Props {
  repeat: boolean;
}

const schema = yup
  .object({
    email: yup.string().min(6).max(60).required(),
    password: yup.string().min(8).max(64).required(),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const AuthForm: FC<Props> = ({ repeat }) => {
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: Data) => {
    const { email, password } = data;
    const newData = {
      email,
      password,
    };
    repeat ? dispatch(registerThunk(newData)) : dispatch(logInThunk(newData));

    reset();
  };

  // const password = watch("password", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <span>This field is required with minimum 8 characters</span>
        )}
      </label>
      {repeat && (
        <>
          <label>
            <span>Repeat password</span>

            <input
              {...register("repeatPassword", {
                required: true,
                // validate: (value) =>
                //   value === password || "Passwords do not match",
              })}
              type="password"
              placeholder="Repeat password"
            />
            {errors.repeatPassword && (
              <span>{errors.repeatPassword?.message}</span>
            )}
          </label>
        </>
      )}

      <button type="submit">{repeat ? "Sign Up" : "Sign In"}</button>
    </form>
  );
};

export default AuthForm;
