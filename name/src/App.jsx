import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [showName, setShowName] = useState(false);
  const nameRef = useRef();

  const handleChange = () => {
    setError("");
    setShowName(false);

    setName(nameRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const invalidCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;
    const isInvalid = invalidCharacters.test(nameRef.current.value);

    if (isInvalid) {
      return setError("Invalid name");
    }

    console.log(nameRef.current.value);
    setShowName(true);
  };

  const handleFocus = () => {
    nameRef.current.focus();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label onClick={handleFocus}>Enter your name:</label>
        <input ref={nameRef} type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p className="error_message">{error ? error : ""}</p>
      <p className="success_message">{showName ? name : ""}</p>
    </>
  );
}

export default App;
