import TriggerButton from "../TriggerButton/TriggerButton";
import { locationItems } from "../data";
import "./BottomMenu.css";

type MenuAction = {
  id: string;
  label: string;
  onTrigger?: () => void;
};

type MenuButton = MenuAction & {
  menuItems?: MenuAction[];
};

type BottomMenuProps = {
  buttons?: MenuButton[];
};

const buildDefaultButtons = (): MenuButton[] => {
  const baseButtons: MenuButton[] = [
    {
      id: "btn-1",
      label: "Accion 1",
      onTrigger: () => console.log("Accion 1"),
    },
    {
      id: "btn-2",
      label: "Accion 2",
      onTrigger: () => console.log("Accion 2"),
    },
    {
      id: "btn-3",
      label: "Accion 3",
      onTrigger: () => console.log("Accion 3"),
    },
    {
      id: "btn-4",
      label: "Accion 4",
      onTrigger: () => console.log("Accion 4"),
    },
  ];

  const dropdownItems: MenuAction[] = locationItems
    .filter((item) => item.isDropdown)
    .map((item) => ({
      id: item.id,
      label: item.label,
      onTrigger: () => console.log(`${item.label}`),
    }));

  const dropdownButton: MenuButton = {
    id: "btn-5",
    label: "Locaciones",
    menuItems: dropdownItems,
  };

  return [...baseButtons, dropdownButton];
};

const BottomMenu = ({ buttons = buildDefaultButtons() }: BottomMenuProps) => {
  return (
    <section className="bottom-menu" aria-label="Bottom actions">
      {buttons.map((button) => {
        if (button.menuItems?.length) {
          return (
            <div
              key={button.id}
              className="bottom-menu__item bottom-menu__item--has-dropdown"
            >
              <TriggerButton
                label={button.label}
                className="bottom-menu__trigger"
                onTrigger={button.onTrigger}
              />
              <div className="bottom-menu__dropdown">
                {button.menuItems.map((item) => (
                  <TriggerButton
                    key={item.id}
                    label={item.label}
                    className="bottom-menu__dropdown-button"
                    onTrigger={item.onTrigger}
                  />
                ))}
              </div>
            </div>
          );
        }

        return (
          <div key={button.id} className="bottom-menu__item">
            <TriggerButton
              label={button.label}
              className="bottom-menu__trigger"
              onTrigger={button.onTrigger}
            />
          </div>
        );
      })}
    </section>
  );
};

export default BottomMenu;
