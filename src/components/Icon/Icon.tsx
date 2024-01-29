import { FC } from "react";
import icons from "../../assets/images/sprite.svg";

interface Props {
  className: string;
  id: string;
}

const Icon: FC<Props> = ({ className, id }) => {
  return (
    <svg className={className}>
      <use href={`${icons}#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;
