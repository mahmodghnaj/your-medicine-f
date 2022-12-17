import { createContext, useContext, useEffect, useRef } from "react";
import { contextValue, children } from "./type";

export type SelectContextType = contextValue;

export interface SelectContextProviderProps {
  value: contextValue;
  children: children;
}

export const SelectContext = createContext<null | SelectContextType>(null);

export function usePrevious<T>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
export const SelectContextProvider = ({
  value,
  children,
}: SelectContextProviderProps) => {
  return (
    <>
      <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
    </>
  );
};

export const useSelect = () => useContext(SelectContext) as SelectContextType;
