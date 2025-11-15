import { sendUE } from "../PixelStreaming/ps-functions";

const createTrigger = (descriptor: string, payload: string) => () =>
  sendUE({ [descriptor]: payload });

export type MenuAction = {
  label: string;
  descriptor: string;
  payload: string;
  onTrigger?: () => void;
};

export type MenuButton = MenuAction & {
  menuItems?: MenuAction[];
};

type MenuDefinition = Omit<MenuAction, "onTrigger">;

const withTriggers = <T extends MenuDefinition>(items: T[]): MenuAction[] =>
  items.map((item) => ({
    ...item,
    onTrigger: createTrigger(item.descriptor, item.payload),
  }));

const dropdownDefinitions: MenuDefinition[] = [
  {
    label: "Comedor",
    descriptor: "location",
    payload: "comedor",
  },
  {
    label: "Sala de estar",
    descriptor: "location",
    payload: "saladeestar",
  },
  {
    label: "Dormitorio",
    descriptor: "location",
    payload: "dormitorio",
  },
];

export const dropdownItems: MenuAction[] = withTriggers(dropdownDefinitions);

const buttonDefinitions: MenuDefinition[] = [
  {
    label: "Tour",
    descriptor: "action",
    payload: "tour",
  },
  {
    label: "Movie",
    descriptor: "action",
    payload: "movie",
  },
];

export const bottomMenuButtons: MenuButton[] = [
  ...withTriggers(buttonDefinitions),
  {
    label: "Locaciones",
    descriptor: "QUE-HACES-AQUI",
    payload: "QUE-HACES-AQUI",
    menuItems: dropdownItems,
  },
];
