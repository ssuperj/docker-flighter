interface User {
  id: number;
  email: string;
  name: string;
  birth: string;
  image: string | null;
  createDate: string | null;
  validDate: string;
  sexType: "MALE" | "FEMALE";
  roleType: "USER" | "ADMIN";
}

type PaymentProps = {
  paymentData: {
    pg: string;
    pay_method: string;
    merchant_uid: string;
    name: string;
    amount: string;
    price: number;
    buyer_name: string;
    airLine: string;
    flight: string;
    departure: string;
    depCode: string;
    destination: string;
    desCode: string;
    departureDate: string;
    startTime: string;
    endTime: string;
    passengers: number;
    adult: number;
    youth: number;
    child: number;
  };
};

export type { User, PaymentProps };
