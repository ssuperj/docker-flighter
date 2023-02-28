import { useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../../types/types";
import instance from "../../utils/instance";
import Weather from "../utils/Weather";

const StyledWrap = styled.div`
  .weather_list {
    margin-top: 60px;
  }

  .container {
    display: flex;
    justify-content: center;
    position: relative;
  }

  span {
    position: absolute;
    margin-top: 10px;
    font-size: 18px;
    color: var(--color-r-m);
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

  @media (max-width: 450px) {
    .container {
      .img {
        width: 411px;
      }
      .stampBox {
        width: 350px;
        height: 280px;
        padding: 50px 0 50px 30px;

        .stamp {
          width: 75px;
        }
      }
      .info {
        width: 390px;
        margin-top: 315px;
        font-size: 12px;
        .profile {
          position: absolute;
          margin: 40px;
          width: 50px;
          height: 50px;
        }

        .name {
          padding-top: 66px;
          padding-left: 190px;
        }
        .birth {
          padding-top: 5px;
          padding-left: 225px;
        }
        .sex {
          padding-top: 4px;
          padding-left: 185px;
        }
        .country {
          padding-top: 4px;
          padding-left: 205px;
        }
        .dateOfIssue {
          padding-top: 18px;
          padding-left: 215px;
          font-size: 10px;
        }
        .type {
          padding-top: 17px;
          padding-left: 300px;
        }
        .validUntil {
          padding-top: 36px;
          padding-left: 207px;
          font-size: 10px;
        }
        .series {
          padding-top: 35px;
          padding-left: 305px;
        }
        .signature {
          padding-top: 6px;
          padding-left: 205px;
        }
      }
    }
  }
`;

function UserInfo() {
  const [user, setUser] = useState<User | undefined>(undefined);

  const parseDate = (date: any) => {
    const parsedDate = new Date(date || "")
      .toLocaleDateString("en", { year: "2-digit", month: "2-digit", day: "2-digit" })
      .replace(/\./g, "-");
    return parsedDate;
  };

  useEffect(() => {
    instance
      .get("/api/user")
      .then((response) => response.data)
      .then((data) => {
        const resUser = data;
        setUser(resUser);
      });
  }, [setUser]);

  return (
    <StyledWrap>
      <Weather />
      <div className="container">
        <span>MY PASSPORT</span>
        <img className="img" src={`${process.env.PUBLIC_URL}/images/mypage-passport2-normal.png`} alt="passport" />
        <div className="stampBox">
          {[...new Array(Math.min(user?.totalTicket || 0, 12))].map(() => (
            <img className="stamp" src={`${process.env.PUBLIC_URL}/images/mypage-sticker3-normal.png`} alt="stamp" />
          ))}
        </div>
        <div className="info">
          <img
            className="profile"
            src={
              user?.image?.slice(0, 5) === "https"
                ? user.image
                : `${process.env.PUBLIC_URL}/images/profile/${user?.image ?? `mypage-profile-default.webp`}`
            }
            alt="profile"
          />
          <p className="name">{user?.name ?? "EMPTY"}</p>
          <p className="birth">{user?.birth ?? "EMPTY"}</p>
          <p className="sex">{user?.sexType ?? "EMPTY"}</p>
          <p className="country">Korea</p>
          <p className="dateOfIssue">{parseDate(user?.createDate) ?? "EMPTY"}</p>
          <p className="type">{user?.roleType}</p>
          <p className="validUntil">{parseDate(user?.validDate) ?? "EMPTY"}</p>
          <p className="series">{`FLT-0${user?.id}` ?? "EMPTY"}</p>
          {/**서명 추후 업데이트 예정 */}
          <p className="signature">EMPTY</p>
        </div>
      </div>
    </StyledWrap>
  );
}

export default UserInfo;
