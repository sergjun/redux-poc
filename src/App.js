import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, loggedIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux-Poc</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(loggedIn())}>Login</button>
      {isLogged ? <h3>Parabens vc pode ver isso agora</h3> : ""}
    </div>
  );
}

export default App;
