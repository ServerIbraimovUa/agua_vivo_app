import React, { ChangeEvent, useState } from "react";

import { useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import Icon from "../../Icon/Icon";
import { selectUser } from "../../../redux/auth/authSelectors";
import { useAppDispatch } from "../../../redux/redux_ts/hook";
import {
  updateUserAvatarThunk,
  updateUserInfoThunk,
} from "../../../redux/auth/auth.operations";
import {
  FormAvatar,
  FormGenderWrap,
  FormSettingStyled,
  FormUserPassword,
  FormAvatarTitle,
  FormAvatarLabel,
  FormGenderContair,
  FormPasswordInput,
  FormNameInput,
  FormEmailInput,
  UserInfoWrap,
  BtnSubmit,
  FormUserWrap,
  MainInfoWrap,
} from "./SettingModal.styled";
import { toast } from "react-toastify";

type SettingForm = {
  avatar: File | null;
  gender: "woman" | "man";
  name: string;
  email: string;
  password?: string;
  newPassword: string;
  repeatNewPassword?: string;
};

const SettingModal: React.FC<{ setVisible: (boolean: boolean) => void }> = ({
  setVisible,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setpreviewURL] = useState<string | null>(null);

  // зміна типу інпута
  const [passwordToggle, setPasswordToggle] = useState("password");
  const [newPasswordToggle, setNewPasswordToggle] = useState("password");
  const [repeatNewPasswordToggle, setRepeatNewPasswordToggle] =
    useState("password");

  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    reset,

    formState: { errors, isSubmitting },
      } = useForm<SettingForm>({
        defaultValues: {
      gender: user.gender || "woman",
      name: user.name || "",
      email: user.email,
      password: "",
      newPassword: "",
      repeatNewPassword: "",
    },
  });

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];
      const fileSizeInMegabytes = selectedFile.size / 1024 / 1024;
      const maxFileSizeInMegabytes = 10;

      if (fileSizeInMegabytes > maxFileSizeInMegabytes) {
        toast.error("The file is too large. Maximum allowed size is 10MB.");
        return;
      }

      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setpreviewURL(reader.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleTogglePassword = (field: string) => {
    if (field === "password") {
      setPasswordToggle((prev) => (prev === "password" ? "text" : "password"));
    } else if (field === "newPassword") {
      setNewPasswordToggle((prev) =>
        prev === "password" ? "text" : "password"
      );
    } else if (field === "repeatNewPassword") {
      setRepeatNewPasswordToggle((prev) =>
        prev === "password" ? "text" : "password"
      );
    }
  };

  const onSubmit: SubmitHandler<SettingForm> = async (data) => {
    if (file) {
      dispatch(updateUserAvatarThunk(file))
        .unwrap()
        .then(() => toast.success("Avatar updated successfully"))
        .catch((e) => {
          if (e.includes("500")) {
            toast.error("File size too large. Maximum size is 10 MB.");
          }
        });
    }

    if (data.gender !== user.gender || data.name !== user.name) {
      dispatch(updateUserInfoThunk({ gender: data.gender, name: data.name }))
        .unwrap()
        .then(() => toast.success("Data updated successfully"));
    }

    if (data.newPassword) {
      try {
        await dispatch(
          updateUserInfoThunk({
            password: data.password,
            newPassword: data.newPassword,
          })
        ).unwrap();
        toast.success("Password updated successfully");
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
    setVisible(false);
    reset({
      password: "",
      newPassword: "",
      repeatNewPassword: "",
    });
  };

  return (
    <FormSettingStyled onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <FormAvatar>
        <FormAvatarTitle>Your photo</FormAvatarTitle>
        <FormAvatarLabel>
          {previewURL ? (
            <img
              className="avatar-setting"
              src={previewURL}
              alt="User avatar"
            />
          ) : (
            <img
              className="avatar-setting"
              src={user.avatar}
              alt="User avatar"
            />
          )}{" "}
          <input
            id="fileElem"
            className="input-avatar"
            type="file"
            accept=".jpeg,.jpg,.png,.gif"
            onChange={onChangeFile}
          />
          <Icon className="setting-modal-icon" id="arow-up" />
          <span className="text-loading">Upload a photo</span>
        </FormAvatarLabel>
      </FormAvatar>
      <FormUserWrap>
        <MainInfoWrap>
          <FormGenderWrap>
            <span className="user-gender-title">Your gender identity</span>
            <FormGenderContair>
              <label className="gender-label">
                <input {...register("gender")} value="woman" type="radio" />
                <span className="gender-sub-title">Woman</span>
              </label>
              <label className="gender-label">
                <input {...register("gender")} value="man" type="radio" />
                <span className="gender-sub-title">Man</span>
                {errors.gender && <p>{`${errors.gender.message}`}</p>}
              </label>
            </FormGenderContair>
          </FormGenderWrap>
          <UserInfoWrap>
            <label className="label-name">
              <span className="user-info-title">Your name</span>
              <FormNameInput
                {...register("name")}
                className={errors.name ? "error-input" : ""}
                type="text"
                placeholder="your name"
              />
            </label>

            <label className="label-email disabled-label">
              <span className="user-info-title">E-mail</span>
              <FormEmailInput
                disabled
                {...register("email")}
                className={errors.email ? "error-input" : ""}
                type="email"
                placeholder="your e-mail"
              />
              {errors.email && (
                <p className="error-message">{`${errors.email.message}`}</p>
              )}
            </label>
          </UserInfoWrap>
        </MainInfoWrap>
        <FormUserPassword>
          <span className="password-title">Password</span>

          <label className="password-label">
            <span className="password-sub-title">Outdated password:</span>
            <FormPasswordInput
              {...register("password", {
                validate: (value, { newPassword }) => {
                  if (newPassword) {
                    return !!value || "This field is required";
                  }
                  return true;
                },
              })}
              className={errors.password ? "error-input" : ""}
              type={passwordToggle}
              placeholder="Password"
            />
            <span
              className="toggle-password"
              onClick={() => handleTogglePassword("password")}
            >
              {passwordToggle === "text" ? (
                <Icon className="password-eye-icon" id="eye" />
              ) : (
                <Icon className="password-eye-outline-icon" id="eye-outline" />
              )}
            </span>
            {errors.password && (
              <p className="error-message">{`${errors.password.message}`}</p>
            )}
          </label>

          <label className="password-label">
            <span className="password-sub-title">New Password:</span>
            <FormPasswordInput
              {...register("newPassword", {
                validate: (value, { password }) => {
                  if (password) {
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
              className={errors.newPassword ? "error-input" : ""}
              type={newPasswordToggle}
              placeholder="Password"
            />
            <span
              className="toggle-password"
              onClick={() => handleTogglePassword("newPassword")}
            >
              {newPasswordToggle === "text" ? (
                <Icon className="password-eye-icon" id="eye" />
              ) : (
                <Icon className="password-eye-outline-icon" id="eye-outline" />
              )}
            </span>
            {errors.newPassword && (
              <p className="error-message">{`${errors.newPassword.message}`}</p>
            )}
          </label>

          <label className="password-label">
            <span className="password-sub-title">Repeat new password:</span>
            <FormPasswordInput
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
              className={errors.repeatNewPassword ? "error-input" : ""}
              type={repeatNewPasswordToggle}
              placeholder="Password"
            />
            <span
              className="toggle-password"
              onClick={() => handleTogglePassword("repeatNewPassword")}
            >
              {repeatNewPasswordToggle === "text" ? (
                <Icon className="password-eye-icon" id="eye" />
              ) : (
                <Icon className="password-eye-outline-icon" id="eye-outline" />
              )}
            </span>
            {errors.repeatNewPassword && (
              <p className="error-message">{`${errors.repeatNewPassword.message}`}</p>
            )}
          </label>
        </FormUserPassword>
      </FormUserWrap>
      <BtnSubmit disabled={isSubmitting} type="submit">
        {isSubmitting ? "Saving..." : "Save"}
      </BtnSubmit>
    </FormSettingStyled>
  );
};

export default SettingModal;
