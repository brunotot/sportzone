import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Register.css";

let schema = yup.object().shape({
  email: yup.string().email().required("validation_email_required"),
  username: yup.string().min(5, "validation_username_minLength5"),
  password: yup.string().required("validation_password_required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "validation_password_mustMatch"),
});

function Register() {
  const history = useHistory();
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [serverError, setServerError] = useState(null);
  const onSubmit = async ({ email, username, password, confirmPassword }) => {
    setServerError(null);
    try {
      throw Error("Test greska");
    } catch (err) {
      setServerError(err.error);
      console.log(serverError);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "50%", margin: "30px auto" }}
    >
      <h3>{t("label_registration_title")}</h3>

      <div className="form-group">
        <label>{t("label_registration_emailLabel")}</label>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder={t("placeholder_registration_email")}
          ref={register}
        />
        <p className="validation-error">{t(errors.email?.message)}</p>
      </div>

      <div className="form-group">
        <label>{t("label_registration_usernameLabel")}</label>
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder={t("placeholder_registration_username")}
          ref={register}
        />
        <p className="validation-error">{t(errors.username?.message)}</p>
      </div>

      <div className="form-group">
        <label>{t("label_registration_passwordLabel")}</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder={t("placeholder_registration_password")}
          ref={register}
        />
        <p className="validation-error">{t(errors.password?.message)}</p>
      </div>

      <div className="form-group">
        <label>{t("label_registration_confirmPasswordLabel")}</label>
        <input
          type="password"
          className="form-control"
          placeholder={t("placeholder_registration_confirmPassword")}
          name="confirmPassword"
          ref={register}
        />
        <p className="validation-error">{t(errors.confirmPassword?.message)}</p>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        {t("label_button_submit")}
      </button>
      <button
        onClick={() => history.push("/login")}
        className="btn btn-warning btn-block"
      >
        {t("label_button_back_login")}
      </button>
    </form>
  );
}

export default Register;
