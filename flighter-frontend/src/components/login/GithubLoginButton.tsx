import { useHistory } from "react-router-use-history";
import { saveToken } from "../../redux/actions";
import store from "../../redux/store";

const GithubLoginButton = () => {
  const BACKEND = process.env.BACKEND || window.location.hostname;
  const BACKEND_PORT = process.env.BACKEND_PORT || "8090";

  const CLIENT_ID = "3d06fe1176e4f9b067e7";
  const REDIRECT_URI = `http://${BACKEND}:${BACKEND_PORT}/api/auth/github`;
  const history = useHistory();

  const handleLogin = () => {
    const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user`;
    const width = 500;
    const height = 600;
    const xPos = window.screen.width / 2 - width / 2;
    const yPos = window.screen.height / 2 - height / 2;
    const childWindow = window.open(url, "_blink", `width=${width},height=${height},left=${xPos},top=${yPos}`);

    let grantType;
    let accessToken;
    let refreshToken;
    let token: any;

    childWindow?.addEventListener("message", (event) => {
      if (event.origin !== window.origin) {
        return;
      }
      if (childWindow.opener) {
        childWindow.opener.postMessage(childWindow.location.search, window.origin);
      }
    });

    window.addEventListener("message", (event) => {
      if (event.origin !== window.origin) {
        return;
      }
      const searchParams = new URLSearchParams(event.data);
      grantType = searchParams.get("grantType");
      accessToken = searchParams.get("accessToken");
      refreshToken = searchParams.get("refreshToken");
      token = { grantType, accessToken, refreshToken };
      childWindow?.close();
    });

    childWindow?.addEventListener("unload", () => {
      store.dispatch(saveToken(token));
      history.go(-1);
    });
  };

  return (
    <>
      <button
        onClick={handleLogin}
        id="github-btn"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          display: "inline-flex",
          alignItems: "center",
          color: "rgba(0, 0, 0, 1)",
          boxShadow: "0px 0px 1px",
          padding: "0px 32px",
          borderRadius: "2px",
          border: "1px solid transparent",
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: "Roboto, sans-serif",
          opacity: "0.6",
        }}
      >
        <div style={{ marginRight: "10px", background: "rgb(255, 255, 255)", padding: "10px", borderRadius: "2px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path d="M12 .3C5.4.3.3 5.5.3 12.1c0 5.3 3.4 9.8 8.1 11.4.6.1.9-.3.9-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-3-.3-6.2-1.5-6.2-6.8 0-1.5.5-2.7 1.2-3.7-.1-.3-.5-1.8.1-3.7 0 0 1.2-.4 3.8 1.4 1.1-.3 2.3-.4 3.5-.4 1.2 0 2.4.1 3.5.4 2.6-1.8 3.8-1.4 3.8-1.4.6 1.9.2 3.4.1 3.7.7 1 .5 2.2.5 3.3 0 5.3-3.2 6.5-6.2 6.8.5.4.9 1.2.9 2.4v3.5c0 .3.3.8 1 .6 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.1-11.8-11.7-11.8z" />
          </svg>
        </div>
        <span style={{ padding: "10px 10px 10px 0px", fontWeight: 500 }}>Github 로그인</span>
      </button>
    </>
  );
};
export default GithubLoginButton;
