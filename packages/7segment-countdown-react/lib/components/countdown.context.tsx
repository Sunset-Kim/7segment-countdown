import { createContext, useContext } from "react";

export const CountdownContext = createContext<{
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

export const useCountdownContext = () => {
  const context = useContext(CountdownContext);

  if (!context) {
    throw new Error(
      "useCountdownContext must be used within a CountdownProvider"
    );
  }

  return context;
};

export const CountdownProvider = CountdownContext.Provider;
