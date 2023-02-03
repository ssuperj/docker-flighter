import { Link } from "react-router-dom";
import NavScroll from "./NavScroll";

function Header(props: any) {
  return (
    <>
      <Link to="/"></Link>
      <NavScroll></NavScroll>
    </>
  );
}

export default Header;
