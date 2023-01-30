import { Link } from "react-router-dom";
import styles from "../css/header.module.css";

function Header(props: any) {
  return (
    <>
      <Link to="/"></Link>
      <h1 className={styles.h1}>flighter</h1>
    </>
  );
}

export default Header;
