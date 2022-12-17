import { Component, ReactNode } from "react";

export interface MainProps extends Component<"main"> {
  children: ReactNode;
}
export const Main = ({ children }: MainProps) => {
  return <>{children}</>;
};
export default Main;
