import { useEffect, useRef, useState } from "react";

function useInterval(callback: any, delay: any) {
  const savedCallback: any = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

  useEffect(() => {
    savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
    }
    if (delay !== null) {
      // 만약 delay가 null이 아니라면
      let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
      return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
    }
  }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
}

const NowDate = (props: any) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const checkTime = () => {
    const now = new Date();
    const nowHour = String(now.getHours()).padStart(2, "0");
    const nowMinute = String(now.getMinutes()).padStart(2, "0");
    const nowSecond = String(now.getSeconds()).padStart(2, "0");
    const nowTime = `${nowHour}:${nowMinute}:${nowSecond}`;
    setTime(nowTime);
  };

  const checkDate = () => {
    const now = new Date();
    const nowDate = now.toLocaleDateString();
    setDate(nowDate);
  };

  useInterval(checkTime, 1000);

  useEffect(() => {
    checkTime();
    checkDate();
  }, []);

  return (
    <div
      className=" p-4 rounded-5 mx-auto w-50 row text-center fs-3 fw-bold"
      style={{
        backgroundColor: "#e4f2fdcc",
        fontFamily: "var(--font-apple)",
        boxShadow: "0 0 50px rgba(0, 0, 0, 0.315)",
        textShadow: "1px 1px 15px #ddd",
        minWidth: "300px",
      }}
    >
      <div className="date mb-3">{date}</div>
      <div className="time">KMT TIME {time}</div>
    </div>
  );
};
export default NowDate;
