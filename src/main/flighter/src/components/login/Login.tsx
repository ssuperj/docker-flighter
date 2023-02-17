import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios.get("/hello").then((response) => {
      setHello(response.data);
    });
  }, []);

  return <>{hello}</>;
};
export default Login;
