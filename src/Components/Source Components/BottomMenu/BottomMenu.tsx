import TriggerButton from "../TriggerButton/TriggerButton";
import "./BottomMenu.css";

type BottomMenuProps = {
  buttons?: Array<{ id: string; label: string; onTrigger?: () => void }>;
};

const defaultButtons: BottomMenuProps["buttons"] = [
  { id: "btn-1", label: "Action 1" },
  { id: "btn-2", label: "Action 2" },
  { id: "btn-3", label: "Action 3" },
  { id: "btn-4", label: "Action 4" },
];

const BottomMenu = ({ buttons = defaultButtons }: BottomMenuProps) => {
  return (
    <section className="bottom-menu" aria-label="Bottom actions">
      {buttons.map(({ id, label, onTrigger }) => (
        <TriggerButton key={id} label={label} onTrigger={onTrigger} />
      ))}
    </section>
  );
};

export default BottomMenu;
