import styles from "../css/UserInfo.module.css";

function UserInfo() {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={`${process.env.PUBLIC_URL}/images/mypage-passport2-normal.png`}
        alt="passport"
      />
      <div className={styles.stampBox}>
        {/* <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
        <img className={styles.stamp} src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" /> */}
      </div>
      <div className={styles.info}>
        <p className={styles.name}>Part JungHeum</p>
        <p className={styles.birth}>1996.06.18</p>
        <p className={styles.sex}>Male</p>
        <p className={styles.country}>Korea</p>
        <p className={styles.dateOfIssue}>2023.02.01</p>
        <p className={styles.type}>mola</p>
        <p className={styles.validUntil}>2028.02.01</p>
        <p className={styles.series}>mola</p>
        <p className={styles.signature}>mola</p>
      </div>
    </div>
  );
}

export default UserInfo;
