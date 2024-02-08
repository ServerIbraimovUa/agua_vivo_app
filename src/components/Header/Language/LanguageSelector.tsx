import Icon from "../../Icon/Icon";
import { SelectDiv } from "./Language.styled";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isListOpen, setListOpen] = useState(false);
  const wrapperRef = useRef(null);

  const languages = [
    { code: "en", name: "EN", class: "icon-flag", id: "uk" },
    { code: "ua", name: "UA", class: "icon-flag", id: "ukraine" },
  ];

  useOutsideClick(wrapperRef, () => {
    if (isListOpen) {
      setListOpen(false);
    }
  });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      console.log(`Language changed to ${lng}`);
      setListOpen(false);
    });
  };
  return (
    <SelectDiv>
      <button onClick={() => setListOpen(!isListOpen)}>
        <Icon className="icon-flag" id="global" />
      </button>
      {isListOpen && (
        <ul ref={wrapperRef}>
          {languages.map((item, index) => (
            <li key={index}>
              <button onClick={() => changeLanguage(item.code)}>
                <Icon className={item.class} id={item.id} />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </SelectDiv>
  );
};
