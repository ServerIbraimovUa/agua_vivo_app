import { useForm } from "react-hook-form";
// import { FC } from "react";

interface SettingForm {
  // photo:
  gender?: "woman" | "man";
  name: string;
  email: string;
  outdatedPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

const SettingModal = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<SettingForm>();

  const onSubmit = (data: SettingForm) => {
    console.log(data);

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* <label>
            <span>Your photo</span>
            <img></img>
            <input type="file" name="remember" />
            <span>Upload a photo</span>
          </label> */}

          <span>Your gender identity</span>

          <div>
            <label>
              <input
                {...register("gender", { required: true })}
                value="woman"
                type="radio"
              />
              <span>Woman</span>
            </label>
            <label>
              <input
                {...register("gender", { required: true })}
                value="man"
                type="radio"
              />
              <span>Man</span>
            </label>
          </div>

          <label>
            <span>Your name</span>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="name"
            />
            {errors.name && <span>This field is required</span>}
          </label>

          <label>
            <span>E-mail</span>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email"
            />
            {errors.email && <span>This field is required</span>}
          </label>
        </div>

        <div>
          <span>Password</span>

          <label>
            <span>Outdated password:</span>
            <input
              {...register("outdatedPassword", {
                required: true,
                minLength: 8,
                maxLength: 64,
              })}
              type="password"
              placeholder="Password"
            />
            {errors.outdatedPassword && <span>This field is required</span>}
          </label>

          <label>
            <span>New Password:</span>
            <input
              {...register("newPassword", {
                required: true,
                minLength: 8,
                maxLength: 64,
              })}
              type="password"
              placeholder="Password"
            />
            {errors.newPassword && <span>This field is required</span>}
          </label>

          <label>
            <span>Repeat new password:</span>
            <input
              {...register("repeatNewPassword", {
                required: true,
                minLength: 8,
                maxLength: 64,
              })}
              type="password"
              placeholder="Password"
            />
            {errors.repeatNewPassword && <span>This field is required</span>}
          </label>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SettingModal;
