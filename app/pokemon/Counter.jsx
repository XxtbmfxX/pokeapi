"use client";

import { useState } from "react";

export default function Counter() {
  const [like, setlike] = useState(false);
  const handlecounter = () => {
    setlike(!like);
  };

  return <button onClick={handlecounter}> {like ? "❤" : "❌"} </button>;
}
