import { createContext, type HTMLAttributes, type ReactNode, useContext, useState } from "react";
import * as styles from "./Tabs.css";

interface TabsContextValue {
  value: string;
  setValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(component: string) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error(`<${component}> must be used inside <Tabs>`);
  return ctx;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

/** Controlled (`value`/`onValueChange`) or uncontrolled (`defaultValue`) — same as everywhere else that pattern shows up. */
export function Tabs({ value, defaultValue, onValueChange, children, className, ...rest }: TabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? "");
  const active = value ?? internal;
  const setValue = (v: string) => {
    if (value === undefined) setInternal(v);
    onValueChange?.(v);
  };
  return (
    <TabsContext.Provider value={{ value: active, setValue }}>
      <div className={[styles.root, className].filter(Boolean).join(" ")} {...rest}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabList({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div role="tablist" className={[styles.tabList, className].filter(Boolean).join(" ")} {...rest} />;
}

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function Tab({ value, className, onClick, children, ...rest }: TabProps) {
  const { value: active, setValue } = useTabsContext("Tab");
  const selected = active === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      className={[styles.tab({ active: selected }), className].filter(Boolean).join(" ")}
      onClick={(e) => {
        setValue(value);
        onClick?.(e);
      }}
      {...rest}
    >
      <span className={styles.tabLabel}>{children}</span>
    </button>
  );
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function TabPanel({ value, className, children, ...rest }: TabPanelProps) {
  const { value: active } = useTabsContext("TabPanel");
  if (active !== value) return null;
  return (
    <div role="tabpanel" className={[styles.panel, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  );
}
