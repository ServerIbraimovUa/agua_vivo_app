// interface IconToggle {
//   toggle: string;
//   setInput: (value: string) => void;
//   setIcon: (value: boolean) => void;
// }

const togglePassword = (toggle, setInput, setIcon) => {
  if (toggle === "password") {
    setIcon(true);
    setInput("text");
  } else {
    setIcon(false);
    setInput("password");
  }
};

export default togglePassword;
