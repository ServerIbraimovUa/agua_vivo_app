const togglePassword = (
  toggle: string,
  setInput: (value: string) => void,
  setIcon: (value: boolean) => void
) => {
  if (toggle === "password") {
    setIcon(true);
    setInput("text");
  } else {
    setIcon(false);
    setInput("password");
  }
};

export default togglePassword;
