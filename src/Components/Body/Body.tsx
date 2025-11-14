import { type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import "./Body.css";

const Body = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const isInteractive = pathname === "/interactive";
  const classes = ["app-body", isInteractive ? "app-body--transparent" : ""]
    .filter(Boolean)
    .join(" ");

  return <main className={classes}>{children}</main>;
};

export default Body;
