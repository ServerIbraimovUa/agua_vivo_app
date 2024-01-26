import arrow from "../../../img/arrow_down.svg"
import signInLogo from "../../../img/Sign_in_def_logo.svg"

const UserLogo = () => {
  return (
      <div>
          <button>User name<img src={signInLogo} alt="default_logo" width="28" height="28" /><img src={arrow} alt="default_logo" width="11" height="6" /></button>
      
    </div>
  );
}

export default UserLogo;
