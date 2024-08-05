import { createContext } from "react";
import { SevenSegmentProps } from "../components/seven-segment";
import { ColonProps } from "../components/colon";

export const CountdownStyleContext = createContext<
  Omit<SevenSegmentProps, "digit"> & ColonProps
>({});

export const CountdownStyleProvider = CountdownStyleContext.Provider;
