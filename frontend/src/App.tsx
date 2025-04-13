import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://flask-backend-o1t6.onrender.com/api/hello")
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch((err) => console.error("API call failed:", err));
  }, []);

  return (
      <div>
        <h1>Portfolio Site</h1>
        <p>Message from backend: {message}</p>
      </div>
  );
}

export default App;