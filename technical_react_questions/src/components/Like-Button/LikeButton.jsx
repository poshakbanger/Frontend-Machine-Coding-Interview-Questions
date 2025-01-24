import React, { useState } from 'react'
import "./LikeButton.css";

const LikeButton = () => {

  const [state,setState] = useState("default");
  const [errorMessage,setErrorMessage] = useState("");

  const handleClick = async () => {
    if (state === "loading") return; // Prevent multiple clicks during loading

    const action = state === "liked" ? "unlike" : "like";
    setState("loading");
    setErrorMessage("");
    try {
      const response = await fetch("https://www.greatfrontend.com/api/questions/like-button",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ action }),
    });
    
    if (response.ok){
      const data = await response.json();
      console.log(data.message);
      setState(action === "like" ? "liked" : "default")
  }
    else {
      const data = await response.json();
        setErrorMessage(data.message);
        setState("default");
    }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setState("default");
    }
  };

  return (
    <div className="like-button-container">
      <button className={`like-button ${state}`}
        onClick={handleClick}
        disabled={state === "loading"}>
        {state === "loading" && <span className="spinner">\u231B</span>}
        {state === "liked" && <span className="heart">\u2764</span>}
        {state === "default" && <span className="heart-outline">\u2661</span>}
      </button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default LikeButton