import { useContext } from "react";
import { CountdownStyleContext } from "../contexts/coundown-style.context";

export const useCountdownStyle = () => {
  const context = useContext(CountdownStyleContext);

  if (!context) {
    throw new Error(
      "useCountdownStyleContext must be used within a CountdownStyleProvider"
    );
  }

  return context;
};
