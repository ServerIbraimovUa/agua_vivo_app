import { FC } from "react";
import { logOutThunk } from "../../../redux/auth/auth.operations";
import { useAppDispatch } from "../../../redux/redux_ts/hook";
import { BtnCancel, BtnLogout, BtnWrapper, TextModal } from "./UserLogautModal.styled";

interface Props {
  setVisible: (b: boolean) => void;
}

const UserLogoutModal: FC<Props> = ({ setVisible }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      

      <TextModal>Do you really want to leave?</TextModal>

      <BtnWrapper>
        <BtnCancel type="button" onClick={() => setVisible(false)}>
          Cancel
        </BtnCancel>
        <BtnLogout type="button" onClick={() => dispatch(logOutThunk())}>
          Log out
        </BtnLogout>
      </BtnWrapper>
    </div>
  );
};

export default UserLogoutModal;
