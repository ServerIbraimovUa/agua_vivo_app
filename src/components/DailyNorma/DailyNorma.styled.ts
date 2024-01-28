import styled from "styled-components";

export const FormContainer = styled.div`
    width: 544px;

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
export const FormSub=styled.div`
    display: flex;    
    gap:24px;
`
export const Span=styled.span`
        color: var(--primary-blue);
        font-size:18px;
`
export const FormHeaderText=styled.p`
    color:#8F8F8F;
    font-size: 12px;
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
export const FormRadioInput=styled.input`
    margin-right: 5px;
`
export const Input=styled.input`
    color: var(--primary-blue);
    height: 44px;
    border: 2px solid var(--secondary-light-blue);
    border-radius: 6px;
    background-color: transparent;
`
export const FormFooter=styled.div`
display: flex;
flex-direction: column;
gap:16px;
`
export const FormButton=styled.button`
    width: 160px;
    border-radius: 10px;
    margin-left:auto;
    font-size: 18px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: var(--primary-blue);
`