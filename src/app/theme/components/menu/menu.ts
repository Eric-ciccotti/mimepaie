import { Menu } from "./menu.model";

export const horizontalMenuItems = [
  new Menu(1, "ACCUEIL", "/", null, null, false, 0),
  new Menu(2, "EXTERNALISATION", "/externalisation", null, null, false, 0),
  new Menu(3, "SERVICES PROPOSES", "/service-proposes", null, null, false, 0),
  new Menu(4, "TARIFICATION", "/tarification", null, null, false, 0),
];

export const verticalMenuItems = [
  new Menu(1, "ACCUEIL", "/", null, null, false, 0),
  new Menu(2, "EXTERNALISATION", "/externalisation", null, null, false, 0),
  new Menu(3, "SERVICES PROPOSES", "/service-proposes", null, null, false, 0),
  new Menu(4, "TARIFICATION", "/tarification", null, null, false, 0),
];
