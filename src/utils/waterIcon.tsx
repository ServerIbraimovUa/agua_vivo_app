import Icon from "../components/Icon/Icon";

export const waterIcon = (volume: number | undefined) => {
  if (volume === undefined) {
    return null;
  }
  
  if (volume >= 1500) {
    return <Icon className="water-bottle-icon" id="barrel" />;
  } else if (volume >= 500) {
    return <Icon className="water-bottle-icon" id="bottle" />;
  } else {
    return <Icon className="water-glass-icon" id="water" />;
  }
};
