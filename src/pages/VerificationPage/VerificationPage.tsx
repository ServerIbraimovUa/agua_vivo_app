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

const VerificationPage = () => {
  const { token } = useParams();
  console.log(token);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (token) {
      dispatch(setVerify(token));
    }
  }, [token, dispatch]);

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
            <Title>Verify your mail</Title>
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
