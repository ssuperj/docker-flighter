import styled from "styled-components";

const StyleWrap = styled.div`
  .container {
    justify-content: center;
    text-align: center;

    .title {
      margin-top: 10px;
      font-size: 18px;
      color: var(--color-r-m) ;
      opacity: 0.8;
    }

    .content {
      margin-top: 50px;
      .ico-air1 {
        width: auto;
      }

      .p-b {
        font-family: var(--font-bd);
      }
    }
  }
`;

function ReserveInfo() {
  return (
    <StyleWrap>
      <div className="container">
        <h1 className="title">Reserve Info</h1><br />
        <div className="content">
          <img className="ico-air1" src={`${process.env.PUBLIC_URL}/images/ic-air1.png`} alt="" />
          <p className="p-b">죄송합니다, 아직 항공편을 표시할 수 없습니다</p>
          <p className="p">고객님의 예약 정보를 확인하시려면, 확정 이메일 또는 <br />
          여행 제공 업체에 연락하시기 바랍니다.</p>
        </div>
      </div>
    </StyleWrap>
  )
}

export default ReserveInfo;