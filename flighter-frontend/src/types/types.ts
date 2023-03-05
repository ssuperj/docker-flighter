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
  totalTicket: number;
}

type PaymentProps = {
  paymentData: {
    pg: string;
    pay_method: string;
    merchant_uid: string;
    name: string;
    amount: string;
    buyer_name: string;
    passengers: number;
    ticketDto: {
      airLine: string;
      price: number;
      adult: number;
      youth: number;
      child: number;
    };
    seatDtos: {
      seatNo: string;
      seatType: string;
    }[];
    flightDto: {
      flight: string;
      departure: string;
      depCode: string;
      destination: string;
      desCode: string;
      departureDate: string;
      startTime: string;
      endTime: string;
    };
  };
};

interface FormData {
  password?: string;
  passwordConfirm?: string;
  passwordNew?: string;
}

export type { User, PaymentProps, FormData };
