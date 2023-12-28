import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import Loader from "./components/Loader";
import Error from "./components/Error";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function App() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("userCount")) || 1
  );
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const setUserDate = async () => {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/` + count
    );
    const userData = await response.json();
    setUser(userData);
    if (response.ok) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    setUserDate();
    localStorage.setItem("userCount", count);
  }, [count]);

  return (
    <div>
      <h1>User ID - {count}</h1>
      {!loading ? (
        success ? (
          <ProfileCard user={user} />
        ) : (
          <Error />
        )
      ) : (
        <Loader />
      )}
      <button
        className="btn"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        <GrFormPrevious />
      </button>
      <button
        className="btn"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        <GrFormNext />
      </button>
    </div>
  );
}

export default App;
