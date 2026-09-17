import { createContext, type HTMLAttributes, useContext, useId } from "react";
import * as styles from "./Radio.css";

const RadioGroupContext = createContext<string | undefined>(undefined);

/** The `name` a `Radio` inside this group should use if it isn't given its own. */
export function useRadioGroupName() {
  return useContext(RadioGroupContext);
}

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Auto-generated if omitted — every `Radio` inside shares it, so only one can be checked at a time. */
  name?: string;
  direction?: "column" | "row";
}

export function RadioGroup({ name, direction = "column", className, role = "radiogroup", ...rest }: RadioGroupProps) {
  const generatedName = useId();
  return (
    <RadioGroupContext.Provider value={name ?? generatedName}>
      <div
        role={role}
        className={[styles.group, direction === "row" && styles.groupRow, className].filter(Boolean).join(" ")}
        {...rest}
      />
    </RadioGroupContext.Provider>
  );
}
