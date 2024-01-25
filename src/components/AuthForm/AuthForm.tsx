
import { useForm } from "react-hook-form";


type Inputs = {
  email: string;
  password: string;
  repeatPassword?: string;

};

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    // reset,

    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => console.log(data);

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
      <label>
        <span>Repeat password</span>

        <input
          {...register("repeatPassword", {
            required: true,
            validate: (value) => value === password || "Passwords do not match",
          })}
          type="password"
          placeholder="Repeat password"
        />
        {errors.repeatPassword && <span>This field is required</span>}
      </label>

      <button type="submit">Sign Up</button>

    </form>
  );
};

export default AuthForm;
