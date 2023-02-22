import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

const GoogleLoginButton = () => {
  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
  };

  const CLIENT_ID = "854205480647-eqg6781nbamokgh9j8o74g2qhr1bvjsg.apps.googleusercontent.com";
  const CLIENT_PWD = "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";
  return (
    <GoogleLogin
      clientId={CLIENT_ID} //
      buttonText="google 로그인"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};
export default GoogleLoginButton;
