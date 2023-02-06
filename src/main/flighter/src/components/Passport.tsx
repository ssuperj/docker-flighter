import styled from "styled-components";

const StyledWrap = styled.div`
  .container {
    display: flex;
    justify-content: center;
    position: relative;
  }

  span {
    position: absolute;
    margin-top: 10px;
    font-size: 18px;
    color: var(--color-r-m) ;
    font-family: var(--font-bd);
    opacity: 0.8;
  }

  .img {
    width: 500px;
    left: 50%;
    margin-top: 30px;
  }

  .stampBox {
    position: absolute;
    margin-top: 30px;
    padding: 60px 0 50px 85px;
    width: 524px;
    height: 345px;
  }

  .stamp {
    width: 90px;
    margin-right: 5px;
  }

  .info {
    position: absolute;
    margin-top: 375px;
    width: 500px;
    height: 345px;
    font-size: 14px;

    .profile {
      position: absolute;
      margin-top: 81px;
      margin-left: 75px;
      width: 110px;
      height: 152px;
    }
    .name {
      padding-top: 83px;
      padding-left: 250px;
    }
    .birth {
      padding-top: 6px;
      padding-left: 290px;
    }
    .sex {
      padding-top: 6px;
      padding-left: 240px;
    }
    .country {
      padding-top: 6px;
      padding-left: 260px;
    }
    .dateOfIssue {
      position: absolute;
      padding-top: 22px;
      padding-left: 270px;
      font-size: 13px;
    }
    .type {
      position: absolute;
      padding-top: 21px;
      padding-left: 370px;
    }
    .validUntil {
      position: absolute;
      padding-top: 44px;
      padding-left: 265px;
      font-size: 13px;
    }
    .series {
      padding-top: 44px;
      padding-left: 380px;
    }
    .signature {
      position: absolute;
      padding-top: 7px;
      padding-left: 260px;
    }
  }
`;

function UserInfo() {
  return (
    <StyledWrap>
      <div className="container">
        <span>MY PASSPORT</span>
        <img
          className="img"
          src={`${process.env.PUBLIC_URL}/images/mypage-passport2-normal.png`}
          alt="passport"
        />
        <div className="stampBox">
          {/* <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" /> */}
        </div>
        <div className="info">
          {/* <img className="profile" src={`${process.env.PUBLIC_URL}/images/mypage-profile2-normal.png`} alt="profile" /> */}
          <p className="name">Part JungHeum</p>
          <p className="birth">1996. 06. 18</p>
          <p className="sex">Male</p>
          <p className="country">Korea</p>
          <p className="dateOfIssue">2023.02.01</p>
          <p className="type">mola</p>
          <p className="validUntil">2028.02.01</p>
          <p className="series">mola</p>
          <p className="signature">mola</p>
        </div>
      </div>
    </StyledWrap>
  );
}

export default UserInfo;
