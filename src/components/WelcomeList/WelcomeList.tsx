import React from "react";
import { ListStyle } from "./WelcomeList.styled";

const WelcomeList = () => {
  return (
    <ListStyle>
      <li>
        <p>Supply of nutrients to all organs</p>
      </li>
      <li>
        <p>Providing oxygen to the lungs</p>
      </li>
      <li>
        <p>Maintaining the work of the heart</p>
      </li>
      <li>
        <p>Release of processed substances</p>
      </li>
      <li>
        <p>Ensuring the stability of the internal environment</p>
      </li>
      <li>
        <p>Maintaining within the normal temperature</p>
      </li>
      <li>
        <p>Maintaining an immune system capable of resisting disease</p>
      </li>
    </ListStyle>
  );
};

export default WelcomeList;
