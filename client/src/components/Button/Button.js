import React from "react";

import useToggle from "../../hooks/useToggle";

export default function Button({ text }) {
  const { on, toggle } = useToggle();

  return (
    <button
      className={on ? "signUpAltButton" : "signUpButton"}
      onClick={() => toggle(!on)}
    >
      {text}
    </button>
  );
}
