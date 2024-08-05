import { createContext } from "react";

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

export const CountdownProvider = CountdownContext.Provider;
