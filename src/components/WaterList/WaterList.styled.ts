import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const WaterContainerStyled = styled.div`
  position: relative;
  z-index: 50;

  .water-section {
    min-width: 544px;
  }

  .water-title {
    margin-bottom: 16px;
    font-weight: var(--medium-font-weight);
    font-size: 26px;
    line-height: var(--standart-line-height);
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
    fill: var(--primary-blue);
  }

  .water-plus-icon:hover {
    fill: var(--secondary-orange);
  }

  .add-water-btn {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 16px;
    font-weight: var(--medium-font-weight);
    color: var(--primary-blue);
  }
  .add-water-btn:hover {
    color: var(--secondary-orange);
  }

  @media ${device.tablet} {
    .water-plus-icon {
      width: 24px;
      height: 24px;
    }

    .add-water-btn {
      font-weight: var(--medium-font-weight);
      font-size: 18px;
      line-height: 1.33;
    }
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 260px;

    .water-title {
      margin-bottom: 0;
    }
  }
`;

//WaterListItem
export const WaterItemBoxStyled = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 3px;

  border-bottom: 1px solid var(--secondary-light-blue);

  .water-info {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .water-amount-time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 128px;

    @media ${device.tablet} {
      width: 158px;
    }
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
  .delete-btn {
    position: relative;
  }

  .edit-btn:hover::after,
  .delete-btn:hover::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 16px;
    height: 1px;
    background-color: var(--secondary-red);
  }

  .edit-btn:hover::after {
    background-color: var(--secondary-blue);
  }
  .edit-delete-btn-box {
    display: flex;
    gap: 18px;
    @media ${device.tablet} {
      gap: 20px;
    }
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
    color: var(--primary-blue);
  }

  .counter-btn {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    border: 1px solid var(--secondary-blue);
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
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
  }
  //

  /* select {
    width: 120px;
    border: 1px solid var(--select-border);
    border-radius: 10px;
    background-color: var(--primary-blue);
  } */

  /* select option {
    background-color: red;
    color: black;
  } */

  //
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
    width: 232px;
    height: 36px;
    border-radius: 10px;
    color: var(--primary-white);
    background-color: var(--primary-blue);
  }

  .delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 232px;
    height: 36px;
    border-radius: 10px;
    color: var(--primary-white);
    background-color: var(--secondary-red);
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
