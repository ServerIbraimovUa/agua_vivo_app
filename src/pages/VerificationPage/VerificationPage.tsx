import {
  HeaderStyle,
  NavbarContainer,
} from "../../components/Header/Header.style";
import Logo from "../../components/Header/Logo/Logo";
import {
  ContainerLink,
  ImgGarage,
  Title,
  VerificationSection,
  WrapperImg,
  WrapperLink,
} from "./VerificationPagestyled";
import Img from "../../assets/images/garage.png";
import { useParams } from "react-router";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import { useEffect } from "react";
import { setVerify } from "../../redux/auth/authSlice";
import { resendVerifyEmail } from "../../redux/auth/auth.operations";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

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
        <ContainerLink className="container">
          <WrapperLink>
            <Title>Check your email to verify your account</Title>
            <div>
              <span>If you didn't receive an email</span>

              <button onClick={handleClick}>click this link to resend</button>
            </div>
          </WrapperLink>
        </ContainerLink>
        <WrapperImg className="container">
          <Title>Here you could be your advertisment!</Title>
          <ImgGarage src={Img} alt="advertisment" />
        </WrapperImg>
      </VerificationSection>
    </>
  );
};

export default VerificationPage;
