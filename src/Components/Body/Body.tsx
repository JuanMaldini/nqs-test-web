import { type ReactNode } from "react";
import "./Body.css";

const Body = ({ children }: { children: ReactNode }) => {
  return <main className="app-body">{children}</main>;
};

export default Body;
