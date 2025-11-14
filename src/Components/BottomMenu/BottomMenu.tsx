import TriggerButton from "../TriggerButton/TriggerButton";
import ScreenshotButton from "../ScreenshotButton/ScreenshotButton";
import { bottomMenuButtons } from "./data";
import type { MenuButton } from "./data";
import "./BottomMenu.css";

type BottomMenuProps = {
  buttons?: MenuButton[];
};

const BottomMenu = ({ buttons = bottomMenuButtons }: BottomMenuProps) => {
  return (
    <section className="bottom-menu" aria-label="Bottom actions">
      <div className="bottom-menu__group">
        {buttons.map((button) => {
          if (button.menuItems?.length) {
            return (
              <div
                key={button.label}
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
                      key={item.label}
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
            <div key={button.label} className="bottom-menu__item">
              <TriggerButton
                label={button.label}
                className="bottom-menu__trigger"
                onTrigger={button.onTrigger}
              />
            </div>
          );
        })}
      </div>
      <ScreenshotButton />
    </section>
  );
};

export default BottomMenu;
