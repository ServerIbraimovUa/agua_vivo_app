import Icon from "../../Icon/Icon";
import UserLogoModal from "../UserLogoModal/UserLogoModal";
import { useTour } from "@reactour/tour";
import { UserLogoStyled } from "./UserLogo.styled";

const UserLogo = () => {
  const { setIsOpen } = useTour();

  return (
    <UserLogoStyled>
      <button onClick={() => setIsOpen(true)}>
        <Icon className="question-icon" id="question" />
      </button>
      <UserLogoModal />
    </UserLogoStyled>
  );
};

export default UserLogo;
