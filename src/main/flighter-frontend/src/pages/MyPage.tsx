import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyPageNav from "../components/mypage/MyPageNav";
import { useAuth } from "../hooks/useAuth";

function MyPage() {
  return <MyPageNav />;
}

export default MyPage;
