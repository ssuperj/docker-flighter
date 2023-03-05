import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

export function useAuth() {
  const token = useSelector((state: any) => state.token);
  const accessToken = token.accessToken;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (accessToken) {
      const decoded: any = jwtDecode(accessToken);
      const currentTime = Date.now() / 1000;
      setIsAuthenticated(decoded.exp > currentTime);
    } else {
      setIsAuthenticated(false);
    }
  }, [accessToken]);

  return { token, isAuthenticated };
}
