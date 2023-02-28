import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { gql } from "@apollo/client";

const GoogleLoginButton = () => {
  const CLIENT_ID = "854205480647-eqg6781nbamokgh9j8o74g2qhr1bvjsg.apps.googleusercontent.com";

  const query = `query {
    getMember(id: 1) {
      id
      name
      age
    }
  }`;

  const responseGoogle = (response: any) => {
    const ID_TOKEN = response.credential;
    axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${ID_TOKEN}`).then((response) => {
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        axios.post("/api/auth/google", data);
      }
    });
  };

  fetch("/api/graphql/auth/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <GoogleLogin
        onSuccess={responseGoogle}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};
export default GoogleLoginButton;
