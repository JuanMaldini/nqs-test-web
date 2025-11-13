import "./Button.css";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ label, className = "", onClick, disabled }: ButtonProps) => {
  const classes = ["app-button"];
  if (className) {
    classes.push(className);
  }

  return (
    <button className={classes.join(" ")} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
