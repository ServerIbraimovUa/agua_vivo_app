import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const FormContainer = styled.div``;
export const Form = styled.form`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;
export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const FormSubHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`;
export const FormSub = styled.div`
  display: flex;
  gap: 24px;
`;
export const Span = styled.label`
  position: relative;
  color: var(--primary-blue);
  font-size: 18px;
`;
export const SpanText = styled.span`
  width: 190px;
  @media ${device.tablet} {
    width: auto;
  }
`;
export const FormHeaderText = styled.p`
  color: #8f8f8f;
  font-size: 12px;
  padding: 10px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
`;
export const FormBody = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;
export const FormSubtitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const LabelNorma = styled.label`
  display: flex;
  gap: 5px;
`;
export const FormRadioInput = styled.input`
  margin-right: 5px;
`;
export const Input = styled.input`
  color: var(--primary-blue);
  height: 44px;
  border: 2px solid var(--secondary-light-blue);
  border-radius: 6px;
  background-color: transparent;
  padding: 12px 10px;
  appearance: textfield;
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const FormButton = styled.button`
  width: 256px;
  font-size: 16px;
  border-radius: 10px;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;

  @media ${device.tablet} {
    width: 160px;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

//Daily Norma
export const WrapperImg=styled.div`
  height: 208px;
  margin-bottom: 30px;
  @media ${device.tablet} {
    height: 386px;
    margin-bottom: 16px;
  }
  @media ${device.desktop} {
    height: 548px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 164px;
  gap: 12px;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  
`;
export const Title = styled.h2`
  font-size: 18px;
  line-height: 1.33;
`;
export const EditButton = styled.button`
  color: #8baeff;
`;
export const WrapperButton = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`;
export const SpanNorma = styled.span`
  color: var(--primary-blue);
  font-size: 22px;
  font-weight: var(--bold-font-weight);
  line-height: 100%;
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

//Popover
export const PopoverWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  top: -90px;
  left: -170px;
  background-color: var(--secondary-light-blue);
  border-radius: 10px;
  border-bottom-left-radius: 0;
  width: 200px;
  height: 80px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 20px;
    top: 100%;
    border-bottom: 35px solid transparent;
    border-right: 30px solid var(--secondary-light-blue);
    border-top: transparent;
  }

  @media ${device.tablet} {
    top: -70px;
    left: 25px;

    &::before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      right: 100%;
      top: 76%;
      border-top: 20px solid transparent;
      border-right: 30px solid var(--secondary-light-blue);
      border-bottom: transparent;
    }
    &::after {
      display: none;
    }
  }
`;

export const PopoverMessage = styled.span`
  color: var(--primary-blue);
  font-size: 18px;
`;
