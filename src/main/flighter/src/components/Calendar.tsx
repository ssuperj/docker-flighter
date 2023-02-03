import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import styled from "styled-components";

registerLocale("ko", ko);

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <DatePicker dateFormat="yyyy/MM/dd" locale="ko" selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default Calendar;
