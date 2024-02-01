import { FC } from "react";
import { PopoverMessage, PopoverWrapper } from "./DailyNorma.styled";

interface Props {
    message?: string;
  }

const Popover: FC<Props> = ({ message }) => {

  return (
    <>
    <PopoverWrapper>
      <PopoverMessage>{message}</PopoverMessage>
    </PopoverWrapper>
    </>
  );
};

export default Popover;
