import { ThreeDots } from "react-loader-spinner";
const Loading: React.FC = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="11"
      color="#407BFF"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: "absolute",
        bottom: "47%",
        left: "47%",
      }}
      visible={true}
    />
  );
};

export default Loading;
