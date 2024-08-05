import { createContext } from "react";
import { SevenSegmentProps } from "../components/seven-segment";

export const CountdownStyleContext = createContext<
  Omit<SevenSegmentProps, "digit">
>({});

export const CountdownStyleProvider = CountdownStyleContext.Provider;
