import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const TextModal = styled.p`
    margin-bottom: 24px;
`

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media ${device.tablet} {
    flex-direction: row;
    }
`

export const BtnLogout = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
   
    width: 232px;
    height: 36px;
    border-radius: 10px;
    color: var(--primary-white);
    background-color: var(--secondary-red);
     &:hover,
        &:focus {
        box-shadow: var(--btn-box-shadow);
        }
        &:active {
        cursor: pointer;
        }

    @media ${device.tablet} {
        width: 160px;
       
       
    }
`;

export const BtnCancel = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 232px;
    height: 36px;
    border-radius: 10px;
    color: var(--primary-white);
    background-color: var(--secondary-blue);
    &:hover,
        &:focus {
        box-shadow: var(--btn-box-shadow);
        }
        &:active {
        cursor: pointer;
        }

    @media ${device.tablet} {
        width: 160px;
        
       
    }
`;