import React, { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { setTokenLocal, setTokenSession } from "../../services/storageService";
import "./Login.css";
import { UserContext } from "../../contexts/UserContext";

let schema = yup.object().shape({
  username: yup.string().min(5, "validation_username_minLength5"),
  password: yup.string().required("validation_password_required"),
});

function Login() {
  const history = useHistory();
  const { t } = useTranslation();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [serverError, setServerError] = useState(null);
  const setUser = useContext(UserContext)[1];

  const doSubmit = async (obj) => {
    setServerError(null);
    let remember = obj.remember;
    try {
      //const data = await sendLoginInfo(username, password);
      const data = { token: "123" };

      if (remember) setTokenLocal(data.token);
      else setTokenSession(data.token);

      //let user = jwtDecode(data.token);
      let user = {
        id: 1,
        name: "Test Test",
        email: "test@test.com",
        password: "test",
      };

      setUser(user);
    } catch (err) {
      setServerError({ message: err.error });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(doSubmit)}
      style={{ width: "50%", margin: "30px auto" }}
    >
      <h3>{t("label_login_title")}</h3>

      <div className="form-group">
        <label>{t("label_login_usernameLabel")}</label>
        <input
          name="username"
          type="text"
          className="form-control"
          placeholder={t("placeholder_login_username")}
          ref={register}
        />
        <p className="validation-error">{t(errors.username?.message)}</p>
      </div>

      <div className="form-group">
        <label>{t("label_login_passwordLabel")}</label>
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder={t("placeholder_login_password")}
          ref={register}
        />
        <p className="validation-error">{t(errors.password?.message)}</p>
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            name="remember"
            className="custom-control-input"
            ref={register}
          />
          <label className="custom-control-label" htmlFor="remember">
            {t("label_button_rememberMe")}
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        {t("label_button_submit")}
      </button>
      <button
        onClick={() => history.push("/register")}
        className="btn btn-warning btn-block"
      >
        {t("label_button_registration")}
      </button>
      <p className="forgot-password text-right">
        <a href="#">{t("label_link_forgotPassword")}</a>
      </p>
    </form>
  );
}

export default Login;
