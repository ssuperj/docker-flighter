import styles from "../css/Rellax.module.css";

const Decoration = (props: any) => {
  return (
    <div className={`${styles.background} rellax`}>
      <img src={process.env.PUBLIC_URL + "/images/test.png"} alt="" />
    </div>
  );
};
export default Decoration;
