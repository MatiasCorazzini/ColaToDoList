import { useEffect, useState } from "react";
import "./App.css";

const fetchData = async () => {
  const res = await fetch("http://localhost:4000/test");
  return res.json();
};


function App() {

  
  const [dato, setDato] = useState()

  useEffect(() => {
    fetchData().then((res) => {
      console.log(res);
      setDato(res.body)     
    });
  }, []);

  return (
    <>
      <h1>{dato}</h1>
    </>
  );
}

export default App;
