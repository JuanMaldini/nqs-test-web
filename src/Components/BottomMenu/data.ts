import { sendUE } from "../PixelStreaming/ps-functions";

const createTrigger = (descriptor: string) => () =>
  sendUE({ [descriptor]: "" });

export type MenuAction = {
  label: string;
  descriptor: string;
  onTrigger?: () => void;
};

export type MenuButton = MenuAction & {
  menuItems?: MenuAction[];
};

type MenuDefinition = Omit<MenuAction, "onTrigger">;

const withTriggers = <T extends MenuDefinition>(items: T[]): MenuAction[] =>
  items.map((item) => ({
    ...item,
    onTrigger: createTrigger(item.descriptor),
  }));

const dropdownDefinitions: MenuDefinition[] = [
  {
    label: "Comedor",
    descriptor: "LOCATION-COMEDOR",
  },
  {
    label: "Sala de estar",
    descriptor: "LOCATION-SALADEESTAR",
  },
  {
    label: "Dormitorio",
    descriptor: "LOCATION-DORMITORIO",
  },
];

export const dropdownItems: MenuAction[] = withTriggers(dropdownDefinitions);

const buttonDefinitions: MenuDefinition[] = [
  {
    label: "Tour",
    descriptor: "ACTION-TOUR",
  },
  {
    label: "Movie",
    descriptor: "ACTION-MOVIE",
  },
];

export const bottomMenuButtons: MenuButton[] = [
  ...withTriggers(buttonDefinitions),
  {
    label: "Locaciones",
    descriptor: "QUE-HACES-AQUI",
    menuItems: dropdownItems,
  },
];
