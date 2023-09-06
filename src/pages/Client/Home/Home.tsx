import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const admin = () => {
    navigate("/admin");
  };
  return (
    <div>
      <button onClick={admin}>Naviate</button>
    </div>
  );
}
