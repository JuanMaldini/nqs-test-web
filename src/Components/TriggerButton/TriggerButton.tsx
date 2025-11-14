import "./TriggerButton.css";

interface TriggerButtonProps {
  label: string;
  onTrigger?: () => void;
  className?: string;
  disabled?: boolean;
}

const TriggerButton = ({
  label,
  onTrigger,
  className = "",
  disabled,
}: TriggerButtonProps) => {
  const classes = ["trigger-button", className].filter(Boolean).join(" ");

  const handleClick = () => {
    onTrigger?.();
  };

  return (
    <button
      className={classes}
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TriggerButton;
