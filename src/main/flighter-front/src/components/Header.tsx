import { Link } from "react-router-dom";
import styles from "../css/header.module.css";
import NavScroll from "../components/ssuperj/NavScroll";

function Header(props: any) {
  return (
    <>
      <Link to="/"></Link>
      <NavScroll></NavScroll>
      <h1 className={styles.h1}>flighter</h1>
    </>
  );
}

export default Header;
