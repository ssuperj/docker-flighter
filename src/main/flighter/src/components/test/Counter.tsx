import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../../store/reducers/counterSlice";

function Counter() {
  const counter = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default Counter;
