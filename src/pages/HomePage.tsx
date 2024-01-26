import { useDispatch } from 'react-redux';
import {
  getCurrentUserThunk,
  getUserInfoByIdThunk,
  logInThunk,
  registerThunk,
  updateAvatar,
} from '../redux/auth/auth.operations';
import { useAppDispatch } from '../redux/hook';

const HomePage = () => {
  const dispatch = useAppDispatch();

  const handle = () => {
    dispatch(logInThunk('1'));
    console.log('55');
  };
  return (
    <div>
      HomePage
      <button type="button" onClick={handle}>
        Ok
      </button>
    </div>
  );
};

export default HomePage;
