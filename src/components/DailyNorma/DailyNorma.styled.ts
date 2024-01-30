import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const FormContainer = styled.div`
    width: 256px;
    @media ${device.tablet} {
       width: 656px;
    }
    @media ${device.tablet} {
       width: 544px;
    }
`
export const Form = styled.form`
    display: flex;
    gap:24px;
    flex-direction: column;
`
export const FormHeader=styled.div`
    display: flex;
    flex-direction: column;
    gap:12px;
`
export const FormSubHeader=styled.div`
    display:flex;
    flex-direction: column;
    gap:16px;
    margin-bottom:12px;

    @media ${device.tablet} {
       flex-direction: row;
       gap:24px;
  }
    
`
export const FormSub=styled.div`
    display: flex;
    gap:24px;
`
export const Span=styled.span`
    color: var(--primary-blue);
    font-size:18px;
`
export const SpanText=styled.span`
    width: 190px;
    @media ${device.tablet} {
       width: auto;
  }
`
export const FormHeaderText=styled.p`
    color:#8F8F8F;
    font-size: 12px;
    padding: 10px;
    border: 1px solid var(--secondary-light-blue);
    border-radius: 6px;
`
export const FormBody=styled.div`
    display: flex;
    gap:16px;
    flex-direction: column;
`
export const FormSubtitle=styled.h3`
    font-size: 18px;
    font-weight:bold;
`
export const Label=styled.label`
    display: flex;
    flex-direction:column;
    gap:8px;
`
export const LabelNorma=styled.label`
    display:flex;
    gap:5px;
`
export const FormRadioInput=styled.input`
    margin-right: 5px;
`
export const Input=styled.input`
    color: var(--primary-blue);
    height: 44px;
    border: 2px solid var(--secondary-light-blue);
    border-radius: 6px;
    background-color: transparent;
    padding: 12px 10px;
`
export const FormFooter=styled.div`
display: flex;
flex-direction: column;
gap:16px;
`
export const FormButton=styled.button`
    width: 256px;
    font-size: 16px;
    border-radius: 10px;
    margin-left:auto;
    padding-top: 8px;
    padding-bottom: 8px;

    @media ${device.tablet} {
       width: 160px;
       font-size: 18px;
       padding-top: 12px;
       padding-bottom: 12px;

  }
`

//Daily Norma
export const Title=styled.h2`
    font-size: 18px;
    font-weight: var(--bold-font-weight);
    line-height: 1.33;
    margin-bottom: 12px;
`
export const EditButton=styled.button`
    color: #8BAEFF;
`
export const Wrapper=styled.div`
    display: flex;
    gap:5px;
    margin-bottom: 16px;
`
export const SpanNorma=styled.span`
    color:var(--primary-blue);
    font-size: 22px;
    font-weight: var(--bold-font-weight);
    @media ${device.tablet} {
        font-size: 24px;
  }
`