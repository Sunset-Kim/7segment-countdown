import { useContext } from "react";
import { CountdownContext } from "../contexts/countdown.context";

export const useCountdownContext = () => {
  const context = useContext(CountdownContext);

  if (!context) {
    throw new Error(
      "useCountdownContext must be used within a CountdownProvider"
    );
  }

  return context;
};
