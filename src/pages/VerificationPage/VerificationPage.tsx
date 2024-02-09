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
import { useTranslation } from "react-i18next";

const VerificationPage = () => {
  const { t } = useTranslation();
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
        .then(() => toast.success(`${t("verifyEmail.notify")}`));
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

            <Popover message={t("verifyEmail.title1")} />
            <Popover message={t("verifyEmail.link")} verify={true} />

            <Icon className="icon-mail" id="mail" />

            <Button onClick={handleClick}>{t("verifyEmail.resend")}</Button>
          </ContainerLink>
          <WrapperImg className="container">
            <Popover message={t("verifyEmail.title2")} advert={true} />

            <ImgGarage src={Img} alt="advertisment" />
          </WrapperImg>
        </WrapperContainer>
      </VerificationSection>
    </>
  );
};

export default VerificationPage;
