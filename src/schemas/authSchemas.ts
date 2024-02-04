import * as yup from "yup";
export const authSchemas = (repeat: boolean) => {
  return repeat
    ? yup
        .object({
          email: yup
            .string()
            .matches(
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              "Invalid email address"
            )
            .required("Email is required"),
          password: yup
            .string()
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
              "Password must include letters and numbers"
            )
            .min(8, "Password is short")
            .max(40, "Password is long")
            .required("Password is required"),
          repeatPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Passwords must match")
            .required("Repeat password is required"),
        })
        .required()
    : yup
        .object({
          email: yup
            .string()
            .matches(
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              "Invalid email address"
            )
            .required("Email is required"),
          password: yup
            .string()
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
              "Password must include letters and numbers"
            )
            .min(8, "Password is short")
            .max(40, "Password is long")
            .required("Password is required"),
        })
        .required();
};

export const emailSchema = () => {
  return yup
    .object({
      email: yup
        .string()
        .matches(
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          "Invalid email address"
        )
        .required("Email is required"),
    })
    .required();
};

export const passwordSchemas = () => {
  return yup
    .object({
      password: yup
        .string()
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
          "Password must include letters and numbers"
        )
        .min(8, "Password is short")
        .max(40, "Password is long")
        .required("Password is required"),
      repeatPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Repeat password is required"),
    })
    .required();
};
