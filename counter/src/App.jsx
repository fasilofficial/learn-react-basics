import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("countValue")) || 0
  );

  useEffect(() => {
    localStorage.setItem("countValue", count);
  }, [count]);

  // useEffect(() => {
  //   const storedCountValue = localStorage.getItem("countValue");
  //   if (storedCountValue !== null && storedCountValue !== "") {
  //     setCount(Number(storedCountValue));
  //   }
  // }, []);

  return (
    <>
      <header>
        <h1>Counter App</h1>
      </header>
      <main>
        <button
          className="counter-btn"
          style={count == 0 ? { opacity: 0 } : {}}
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          -
        </button>
        <h1 className="count">{count}</h1>
        <button
          className="counter-btn"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          +
        </button>
      </main>
      <footer>
        <button onClick={() => setCount(0)}>Reset</button>
      </footer>
    </>
  );
}

export default App;
