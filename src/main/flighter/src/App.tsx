import Router from "./pages/Router";
import GlobalStyles from "./components/styles/GlobalStyles";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // const [hello, setHello] = useState('');

  // useEffect(()=> {
  //   axios
  //     .get("/hello/zzzzzzz")
  //     .then(response => setHello(response.data))
  // },[])
  return (
    <>
      {/* {hello} */}
      <Router />
      <GlobalStyles />
    </>
  );
};

export default App;
