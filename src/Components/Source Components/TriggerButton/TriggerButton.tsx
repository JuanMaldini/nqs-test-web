import { type ButtonHTMLAttributes } from "react";
import "./TriggerButton.css";

type TriggerButtonProps = {
  label: string;
  onTrigger?: () => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick">;

const TriggerButton = ({
  label,
  onTrigger,
  className = "",
  ...props
}: TriggerButtonProps) => {
  const classes = ["trigger-button", className].filter(Boolean).join(" ");

  const handleClick = () => {
    if (onTrigger) {
      onTrigger();
    } else {
      console.log("Hello World");
    }
  };

  return (
    <button className={classes} type="button" {...props} onClick={handleClick}>
      {label}
    </button>
  );
};

export default TriggerButton;
