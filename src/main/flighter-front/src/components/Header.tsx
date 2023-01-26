import { Link } from "react-router-dom";

function Header(props: any) {
  return (
    <>
      <Link to="/">
        <h1>헤더입니다.</h1>
      </Link>
    </>
  );
}

export default Header;
