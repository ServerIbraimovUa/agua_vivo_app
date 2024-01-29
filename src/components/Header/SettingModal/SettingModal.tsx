import React, { ChangeEvent, useState } from "react";

import { useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
// import Icon from "../../Icon/Icon";
import { selectUser } from "../../../redux/auth/authSelectors";
import { useAppDispatch } from "../../../redux/redux_ts/hook";
import { updateAvatar } from "../../../redux/auth/auth.operations";
import { FormSettingStyled } from "./SettingModal.styled";

type SettingForm = {
  avatar: string;
  gender?: "male" | "female" | "other";
  name: string;
  email: string;
  outdatedPassword?: string;
  newPassword?: string;
  repeatNewPassword?: string;
};

const SettingModal: React.FC = () => {
  const [file, setFile] = useState("");
  const data = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<SettingForm>({
    defaultValues: {
      gender: "other",
      name: data.name || "",
      email: data.email,
      outdatedPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    },
  });

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile.name);
    } // console.dir(e.target);
  };

  const onSubmit: SubmitHandler<SettingForm> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(updateAvatar(file));
    console.log(data);

    reset();
  };

  return (
    <div>
      <FormSettingStyled onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <span>Your photo</span>
            <img className="avatar" src={data.avatar} alt="User avatar" />
            <input type="file" onChange={onChangeFile} />
            {/* <Icon className="modal-icon" id="arow-up" /> */}
            <span>Upload a photo</span>
          </label>

          <span>Your gender identity</span>

          <div>
            <label>
              <input
                {...register("gender", { required: "Please select a gender" })}
                value="female"
                type="radio"
              />
              <span>Woman</span>
            </label>
            <label>
              <input
                {...register("gender", { required: "Please select a gender" })}
                value="male"
                type="radio"
              />
              <span>Man</span>
            </label>
            <label>
              <input
                {...register("gender", { required: "Please select a gender" })}
                value="other"
                type="radio"
              />
              <span>Other</span>
            </label>
          </div>

          <label>
            <span>Your name</span>
            <input {...register("name")} type="text" placeholder="name" />
          </label>

          <label>
            <span>E-mail</span>
            <input
              {...register("email", {
                required: "This field is required",
              })}
              type="email"
              placeholder="email"
            />
            {errors.email && <p>{`${errors.email.message}`}</p>}
          </label>
        </div>

        <div>
          <span>Password</span>

          <label>
            <span>Outdated password:</span>
            <input
              {...register("outdatedPassword", {
                validate: (value, { newPassword }) => {
                  if (newPassword) {
                    return !!value || "This field is required";
                  }
                  return true;
                },
              })}
              type="password"
              placeholder="Password"
            />
            {errors.outdatedPassword && (
              <p>{`${errors.outdatedPassword.message}`}</p>
            )}
          </label>

          <label>
            <span>New Password:</span>
            <input
              {...register("newPassword", {
                validate: (value, { outdatedPassword }) => {
                  if (outdatedPassword) {
                    return !!value || "This field is required";
                  }
                  return true;
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 64,
                  message: "Password must be at most 64 characters",
                },
              })}
              type="password"
              placeholder="Password"
            />
            {errors.newPassword && <p>{`${errors.newPassword.message}`}</p>}
          </label>

          <label>
            <span>Repeat new password:</span>
            <input
              {...register("repeatNewPassword", {
                validate: (value) =>
                  value === getValues("newPassword") || "Passwords must match",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 64,
                  message: "Password must be at most 64 characters",
                },
              })}
              type="password"
              placeholder="Password"
            />
            {errors.repeatNewPassword && (
              <p>{`${errors.repeatNewPassword.message}`}</p>
            )}
          </label>
        </div>

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </FormSettingStyled>
    </div>
  );
};

export default SettingModal;
