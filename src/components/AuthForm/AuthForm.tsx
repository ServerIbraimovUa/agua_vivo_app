import { FC } from "react";
import { useForm } from "react-hook-form";
import { logInThunk, registerThunk } from "../../redux/auth/auth.operations";
import { useAppDispatch } from "../../redux/redux_ts/hook";

export interface Data {
  email: string;
  password: string;
  repeatPassword?: string;
}
interface Props {
  repeat: boolean;
}

const AuthForm: FC<Props> = ({ repeat }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Data>();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: Data) => {
    repeat ? dispatch(registerThunk(data)) : dispatch(logInThunk(data));

    reset();
  };

  const password = watch("password", "");

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
        {errors.password && <span>This field is required</span>}
      </label>
      {repeat && (
        <>
          <label>
            <span>Repeat password</span>

            <input
              {...register("repeatPassword", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              placeholder="Repeat password"
            />
            {errors.repeatPassword && <span>This field is required</span>}
          </label>
        </>
      )}

      <button type="submit">{repeat ? "Sign Up" : "Sign In"}</button>
    </form>
  );
};

export default AuthForm;
