export type LocationItem = {
  id: string;
  label: string;
  isDropdown?: boolean;
};

export const locationItems: LocationItem[] = [
  { id: "location-1", label: "Locacion 1", isDropdown: true },
  { id: "location-2", label: "Locacion 2", isDropdown: true },
  { id: "location-3", label: "Locacion 3", isDropdown: true },
  { id: "location-4", label: "Locacion 4", isDropdown: true },
];
