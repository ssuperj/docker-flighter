import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";

registerLocale("ko", ko);

const Calendar = (props: any) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      locale="ko"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      id={props.id}
    />
  );
};

export default Calendar;
