import { gql } from "@apollo/client";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useHistory } from "react-router-use-history";
import client from "../../client";
import { saveToken } from "../../redux/actions";
import store from "../../redux/store";

const GoogleLoginButton = () => {
  const history = useHistory();
  const CLIENT_ID = "854205480647-eqg6781nbamokgh9j8o74g2qhr1bvjsg.apps.googleusercontent.com";

  const SAVE_OR_LOGIN_USER_BY_GOOGLE = gql`
    mutation saveOrLoginUserByGoogle($sub: String!, $email: String!, $name: String!, $picture: String!) {
      saveOrLoginUserByGoogle(sub: $sub, email: $email, name: $name, picture: $picture) {
        grantType
        accessToken
        refreshToken
      }
    }
  `;

  const responseGoogle = (response: any) => {
    const ID_TOKEN = response.credential;
    axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${ID_TOKEN}`).then((response) => {
      if (response.status === 200) {
        const { sub, email, name, picture } = response.data;
        const variables = { sub, email, name, picture };

        client
          .mutate({
            mutation: SAVE_OR_LOGIN_USER_BY_GOOGLE,
            variables: variables,
          })
          .then((result: any) => {
            const token = result.data.saveOrLoginUserByGoogle;
            store.dispatch(saveToken(token));
            history.go(-1);
          });
      }
    });
  };

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
