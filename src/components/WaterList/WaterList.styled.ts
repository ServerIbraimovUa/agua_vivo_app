import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const WaterContainerStyled = styled.div`
  .water-section {
    min-width: 544px;
  }

  .water-title {
    font-size: 26px;
    font-weight: var(--medium-font-weight);
    margin-bottom: 16px;
  }

  .water-empty {
    color: var(--primary-blue);
    height: 162px;
  }

  .water-list {
    display: flex;
    flex-direction: column;

    height: 150px;
    margin-bottom: 12px;
    overflow-y: auto;
  }
  .water-list::-webkit-scrollbar {
    width: 4px;
    background-color: var(--secondary-light-blue);
  }
  .water-list::-webkit-scrollbar-thumb {
    width: 4px;
    background: var(--secondary-blue);
  }

  .water-plus-icon {
    width: 16px;
    height: 16px;
    stroke: var(--primary-blue);
  }

  .add-water-btn {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 16px;
    font-weight: var(--medium-font-weight);
    color: var(--primary-blue);
  }
  .add-water-btn:hover,
  .add-water-btn:focus {
    .water-plus-icon {
      stroke: var(--secondary-orange);
    }
    color: var(--secondary-orange);

    transform: scale(1.1);
    text-decoration-thickness: 2px;

    text-decoration: underline;
    text-decoration-color: var(--secondary-orange);
    text-decoration-thickness: 2px;
  }

  @media ${device.tablet} {
    .water-title {
      margin-bottom: 16px;
    }

    .water-plus-icon {
      width: 24px;
      height: 24px;
    }

    .add-water-btn {
      font-size: 18px;
    }
  }
`;

//WaterListItem
export const WaterItemBoxStyled = styled.li`
  height: 50px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  padding: 12px 10px 12px 0;

  border-bottom: 1px solid var(--secondary-light-blue);

  .water-info {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .water-glass-icon {
    width: 26px;
    height: 26px;
  }
  .water-bottle-icon {
    width: 26px;
    height: 30px;
  }

  .water-amount-card {
    font-size: 18px;
    color: var(--primary-blue);
    width: 65px;
  }

  .time {
    font-size: 12px;
  }

  .edit-water-icon,
  .delete-water-icon {
    width: 16px;
    height: 16px;
  }
  .edit-btn,
  .delete-btn-card {
    position: relative;
  }

  .edit-btn:hover::after,
  .edit-btn:focus::after,
  .delete-btn-card:hover::after,
  .delete-btn-card:focus::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 16px;
    height: 1px;
    background-color: var(--secondary-red);
    /* transition: width 1s ease-in; */
  }

  .edit-btn:hover::after,
  .edit-btn:focus::after {
    background-color: var(--secondary-blue);
    /* width: 100%; */
  }
  .edit-delete-btn-box {
    display: flex;
    gap: 18px;
  }

  @media ${device.tablet} {
    .water-glass-icon {
      width: 36px;
      height: 36px;
    }
    .water-bottle-icon {
      width: 36px;
      height: 39px;
    }
  }
`;

// AddWaterModal

export const AddWaterModalStyled = styled.div`
  .water-card {
    width: 254px;
    padding: 8px 24px;
    margin-bottom: 24px;

    display: flex;
    align-items: center;
    gap: 12px;

    border-radius: 10px;
    background: var(--secondary-light-blue);
  }
  .add-water-title {
    font-size: 18px;
    font-weight: var(--medium-font-weight);
    margin-bottom: 16px;
  }

  .counter-btn-box {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .water-amount-span {
    width: 92px;
    font-size: 18px;
    font-weight: var(--bold-font-weight);
    color: var(--primary-blue);

    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;

    border-radius: 40px;
    background: var(--secondary-light-blue);
  }

  .icon-minus,
  .icon-plus {
    width: 24px;
    height: 24px;
    stroke: var(--primary-blue);
  }

  .counter-btn {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    border: 1px solid var(--secondary-blue);
  }
  .counter-btn:hover,
  .counter-btn:focus {
    box-shadow: var(--btn-box-shadow);
  }

  .add-water-form {
    display: flex;
    gap: 24px;
    flex-direction: column;
  }

  .water-select {
    color: var(--primary-blue);
    height: 44px;
    width: 120px;
    border: 2px solid var(--secondary-light-blue);
    border-radius: 6px;
    background-color: transparent;
    padding: 12px 10px;
  }

  .water-label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .enter-water-span {
    width: 240px;
    font-size: 18px;
    font-weight: var(--medium-font-weight);
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .water-amount {
    font-size: 18px;
    font-weight: var(--bold-font-weight);
    color: var(--primary-blue);
  }

  .counter-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }

  .save-btn {
    width: 256px;
    height: 36px;
    border-radius: 10px;
    font-size: 18px;
    padding: 8px 30px;
    background-color: var(--primary-blue);
    color: var(--secondary-white);
    &:hover,
    &:focus {
      box-shadow: var(--btn-box-shadow);
    }
    &:active {
      cursor: inherit;
    }
  }

  @media ${device.tablet} {
    max-width: 744px;

    .water-select {
      width: 100%;
    }

    .save-btn {
      height: 44px;
    }

    .btn-container {
      display: flex;
      flex-direction: row;
      justify-content: end;
      gap: 24px;
    }

    .save-btn {
      width: 160px;
    }
  }

  @media ${device.desktop} {
  }
`;

// DeleteWaterModal

export const DeleteWaterModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  .delete-title {
    font-size: 18px;
    font-weight: var(--medium-font-weight);
  }

  .cancel-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: var(--medium-font-weight);

    width: 232px;
    height: 36px;
    border-radius: 10px;
    color: var(--primary-blue);
    background-color: var(--secondary-light-blue);
    &:hover,
    &:focus {
      box-shadow: var(--btn-box-shadow);
    }
    &:active {
      cursor: inherit;
    }
  }

  .delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: var(--medium-font-weight);

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
      cursor: inherit;
    }
  }

  .delete-btn-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  @media ${device.tablet} {
    .delete-btn-box {
      display: flex;
      flex-direction: row;
      gap: 24px;
      justify-content: end;
    }

    .cancel-btn,
    .delete-btn {
      height: 44px;
    }
  }
`;
