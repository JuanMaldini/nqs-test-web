import { type ReactNode } from "react";
import "./Body.css";

type BodyProps = {
  children: ReactNode;
};

const Body = ({ children }: BodyProps) => {
  return <main className="app-body">{children}</main>;
};

export default Body;
