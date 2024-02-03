
import { HeaderStyle, NavbarContainer } from "../../components/Header/Header.style";
import Logo from "../../components/Header/Logo/Logo";
import {  ContainerLink, ImgGarage, Title, VerificationSection,  WrapperImg,  WrapperLink } from "./VerificationPagestyled";
import Img from "../../assets/images/garageMob.png"


const VerificationPage = () => {
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
          <WrapperLink >            
              <Title>"Verify your mail"</Title>
              <a href="">link</a>
          </WrapperLink>
          </ContainerLink> 
          <WrapperImg className="container">
            <Title>Here you could be your advertisment!</Title>
            <ImgGarage src={Img} alt="advertisment"/>
          </WrapperImg>
      </VerificationSection>
    </>
  );
};

export default VerificationPage;