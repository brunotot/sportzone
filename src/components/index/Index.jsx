import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { user, setUser } = useContext(UserContext);
  const { t } = useTranslation();

  return (
    <div>
      {user ? (
        <div>
          <h2 className="text-center">
            {t("label_index_loggedInAs")}:&nbsp;{user.username}
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="text-center">{t("label_index_notLoggedIn")}</h2>
        </div>
      )}
    </div>
  );
}
