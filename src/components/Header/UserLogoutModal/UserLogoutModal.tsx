import { FC } from "react";
import { logOutThunk } from "../../../redux/auth/auth.operations";
import { useAppDispatch } from "../../../redux/redux_ts/hook";

interface Props {
  setVisible: (b: boolean) => void;
}

const UserLogoutModal: FC<Props> = ({ setVisible }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Log out</h2>

      <p>Do you really want to leave?</p>

      <div>
        <button type="button" onClick={() => setVisible(false)}>
          Cancel
        </button>
        <button type="button" onClick={() => dispatch(logOutThunk())}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserLogoutModal;
