import { useForm } from "react-hook-form";
import { emailSchema } from "../../schemas/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ForgotPassFormButton,
  StyledForgotPasswordForm,
} from "./ForgoPasswordForm.styled";
import { forgotPasswordThunk } from "../../redux/auth/auth.operations";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
export interface Data {
  email: string;
}

const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(emailSchema()),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: Data) => {
    dispatch(forgotPasswordThunk(data))
      .unwrap()
      .then(() => {
        toast.success(`${t("forgot.notify")}`);
      })
      .catch((e) => {
        if (e.includes("404")) {
          toast.error(`${t("forgot.notifyError")}`);
        }
      });
  };

  return (
    <StyledForgotPasswordForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>{t("forgot.label1")}</span>
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

      <ForgotPassFormButton className="btn" type="submit">
        {t("forgot.sendButton")}
      </ForgotPassFormButton>
    </StyledForgotPasswordForm>
  );
};

export default ForgotPasswordForm;
