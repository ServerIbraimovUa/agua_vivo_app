import { FC } from "react";
import Icon from "../../Icon/Icon";
import { useTranslation } from "react-i18next";
import { ModalDiv } from "./Language.styled";

const LanguageModal: FC = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", name: t("lang.en"), class: "icon-flag", id: "uk" },
    { code: "ua", name: t("lang.uk"), class: "icon-flag", id: "ukraine" },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <ModalDiv>
      <h2>{t("lang.choice")}</h2>
      <ul className="lang-list">
        {languages.map((item, index) => (
          <li key={index}>
            <button onClick={() => changeLanguage(item.code)}>
              <Icon className={item.class} id={item.id} />
              <p>{item.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </ModalDiv>
  );
};

export default LanguageModal;
