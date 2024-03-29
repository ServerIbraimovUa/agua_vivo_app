import { FC } from "react";
import { logOutThunk } from "../../../redux/auth/auth.operations";
import { useAppDispatch } from "../../../redux/redux_ts/hook";
import {
  BtnCancel,
  BtnLogout,
  BtnWrapper,
  TextModal,
} from "./UserLogautModal.styled";
import { useTranslation } from "react-i18next";

interface Props {
  setVisible: (b: boolean) => void;
}

const UserLogoutModal: FC<Props> = ({ setVisible }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <div>
      <TextModal>{t("logoutModal.really")}</TextModal>

      <BtnWrapper>
        <BtnCancel type="button" onClick={() => setVisible(false)}>
          {t("deleteModal.cancel")}
        </BtnCancel>
        <BtnLogout type="button" onClick={() => dispatch(logOutThunk())}>
          {t("header.logout")}
        </BtnLogout>
      </BtnWrapper>
    </div>
  );
};

export default UserLogoutModal;
