import {
  HeaderStyle,
  NavbarContainer,
} from "../../components/Header/Header.style";
import Logo from "../../components/Header/Logo/Logo";
import {
  Button,
  ContainerLink,
  ImgGarage,
  VerificationSection,
  WrapperContainer,
  WrapperImg,
} from "./VerificationPagestyled";
import Img from "../../assets/images/garage.jpg";
import { useParams } from "react-router";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import { useEffect } from "react";
import { setVerify } from "../../redux/auth/authSlice";
import { resendVerifyEmail } from "../../redux/auth/auth.operations";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Popover from "../../components/Popover/Popover";
import Icon from "../../components/Icon/Icon";

const VerificationPage = () => {
  const { token } = useParams();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (token) {
      dispatch(setVerify(token));
    }
  }, [token, dispatch]);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email) {
      dispatch(resendVerifyEmail({ email }))
        .unwrap()
        .then(() => toast.success("Email was resended successfully"));
    }
  };
  return (
    <>
      <HeaderStyle>
        <div className="container header-container">
          <NavbarContainer>
            <Logo />
          </NavbarContainer>
        </div>
      </HeaderStyle>

      <VerificationSection className="section">
        <WrapperContainer>
          <ContainerLink className="container">
            <Popover message="Check your email to verify your account" />
            <Popover
              message="If you didn't receive an email, click this link to resend"
              verify={true}
            />

            <Icon className="icon-mail" id="mail" />

            <Button onClick={handleClick}>Resend</Button>
          </ContainerLink>
          <WrapperImg className="container">
            <Popover message="Here could be your advertisment!" advert={true} />
            <ImgGarage src={Img} alt="advertisment" />
          </WrapperImg>
        </WrapperContainer>
      </VerificationSection>
    </>
  );
};

export default VerificationPage;
