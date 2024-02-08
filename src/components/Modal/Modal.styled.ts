import styled from 'styled-components';
import { device } from '../../css/deviceSize';
interface Props {
  $setting: boolean | undefined;
  $daily: boolean | undefined;
  $logout: boolean | undefined;
  $delete: boolean | undefined;
}
export const Overlay = styled.div<Props>`
  background: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: auto;
    max-height: 90%;
    @media screen and (max-width: 767px) {
      top: ${props => (props.$logout || props.$delete ? '10%' : '6%')};
      transform: translateX(-50%);
    }
    @media screen and (max-width: 1440px) {
      top: ${props => (props.$logout || props.$delete ? '30%' : '9%')};
      transform: translateX(-50%);
    }

    background: var(--primary-white);
    border-radius: 8px;
    overflow: hidden;
    padding: ${props =>
      props.$logout || props.$delete ? '32px 24px' : '24px 12px'};
    overflow: auto;

    @media ${device.tablet} {
      width: ${props => (props.$logout || props.$delete ? '592px' : '704px')};

      padding: 32px 24px;
    }
    @media ${device.desktop} {
      width: ${props => (props.$setting ? ' 1008px' : '592px')};
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 26px;
    font-weight: 600;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      background-color: transparent;
      border: none;

      transition: transform 350ms ease-in-out;

      &:hover {
        transform: rotate(90deg);
      }
      .modal-icon {
        width: 24px;
        height: 24px;
        stroke: #407bff;
      }
    }
  }
`;
