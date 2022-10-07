import Google from "../img/google.png";
import Facebook from "../img/volvo-logo.png";
import Github from "../img/github.png";

const Login = () => {
  const google = () => {
    window.open("https://accounts.google.com/", "_self");
  };

  const github = () => {
    window.open("https://github.com/login", "_self");
  };

  const facebook = () => {
    window.open("https://sso-qa.api.volvocars.biz/auth", "_self");
  };

  return (
    <div className="login">
      
      <div className="wrapper">
     
        <div className="left">
        <div className="welcome">
        <strong><h1>Welcome</h1></strong>
        </div>
        
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            CDSID
          </div>
          <div className="loginGitHubButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        {/* <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
