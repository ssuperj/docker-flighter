import React, { useEffect } from 'react';
import { useHistory } from 'react-router-use-history';

type PaymentProps = {
    paymentData: {
        pg: string,
        pay_method: string,
        merchant_uid: string,
        name: string,
        amount: string,
        price: number,
        buyer_name: string,
        airLine: string,
        flight: string,
        departure: string,
        depCode: string,
        destination: string,
        desCode: string,
        departureDate: string,
        startTime: string,
        endTime: string,
        passengers: number,
        adult: number,
        youth: number,
        child: number,
        seatType: string,
        seatNo: string,
    }
}

const Payment = ({ paymentData }: PaymentProps) => {
    const paymentDataJson = JSON.stringify(paymentData);
    const history = useHistory();
    console.log(paymentDataJson);

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
        }
    }, []);

    const onClickPayment = () => {
        const { IMP }: any = window;
        IMP.init("imp55188063");
        IMP.request_pay(paymentData, callback);
    }

    const callback = (response: any) => {
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;
        if (success) {
            fetch('/api/payment/complete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: paymentDataJson
            })
                .then(data => {
                    alert('결제가 완료되었습니다');
                    history.push('/flighter/paycomplete');
                })
        } else {
            alert(`결제 실패 : ${error_msg}`);
        }
    }

    return (
        <>
            <button onClick={onClickPayment}>결제하기</button>
        </>
    );
}

export default Payment;