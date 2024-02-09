import i18n from "../i18n/i18n";

export const steps = [
  {
    selector: ".welcome-step",
    content: () => i18n.t("tour.welcome"),
  },
  {
    selector: ".first-step",
    content: () => i18n.t("tour.calculate"),
  },
  {
    selector: ".second-step",
    content: () => i18n.t("tour.add"),
  },
  {
    selector: ".third-step",
    content: () => i18n.t("tour.percentage"),
  },
  {
    selector: ".fourth-step",
    content: () => i18n.t("tour.calendar"),
  },
  {
    selector: ".fifth-step",
    content: () => i18n.t("tour.stats"),
  },
  {
    selector: ".sixth-step",
    content: () => i18n.t("tour.setting"),
  },
  {
    selector: ".seventh-step",
    content: () => i18n.t("tour.cheers"),
  },
];
