import { useTranslation } from "react-i18next";
import { Div, Ul } from "./WhyDrinkWaterStyled.styled";

const WhyDrinkWater = () => {
  const { t } = useTranslation();
  return (
    <Div>
      <h3>{t("welcome.subtitle3Why")}</h3>
      <Ul>
        <li>
          <p>{t("welcome.subtitle3WhyLI1")}</p>
        </li>
        <li>
          <p>{t("welcome.subtitle3WhyLI2")}</p>
        </li>
        <li>
          <p>{t("welcome.subtitle3WhyLI3")}</p>
        </li>
        <li>
          <p>{t("welcome.subtitle3WhyLI4")}</p>
        </li>
        <li>
          <p>{t("welcome.subtitle3WhyLI5")}</p>
        </li>
        <li>
          <p>{t("welcome.subtitle3WhyLI6")}</p>
        </li>
        <li>
          <p>{t("welcome.subtitle3WhyLI7")}</p>
        </li>
      </Ul>
    </Div>
  );
};

export default WhyDrinkWater;
