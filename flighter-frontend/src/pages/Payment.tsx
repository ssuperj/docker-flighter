import { useEffect } from "react";
import { useHistory } from "react-router-use-history";
import { useAuth } from "../hooks/useAuth";
import { PaymentProps } from "../types/types";
import instance from "../utils/instance";

const Payment = ({ paymentData }: PaymentProps) => {
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const { IMP }: any = window;
    IMP.init("imp55188063");
    IMP.request_pay(paymentData, callback);
    // instance.post("/api/reserve", paymentData).then((data) => {
    //   alert("결제가 완료되었습니다");
    //   history.replace(`${process.env.PUBLIC_URL}/paycomplete`);
    // });
  };

  const callback = (response: any) => {
    const { success, error_msg } = response;
    if (success) {
      instance.post("/api/reserve", paymentData).then((data) => {
        alert("결제가 완료되었습니다");
        history.replace(`${process.env.PUBLIC_URL}/paycomplete`);
      });
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };

  return (
    <>
      <button onClick={isAuthenticated ? onClickPayment : () => history.push(`${process.env.PUBLIC_URL}/login`)}>
        결제하기
      </button>
    </>
  );
};

export default Payment;
