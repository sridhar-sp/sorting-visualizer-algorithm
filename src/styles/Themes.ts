import { LightColors, DarkColors, Colors } from "./Colors";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    theme: string;
    colors: Colors;
  }
}

export const getTheme = (theme: string): DefaultTheme => {
  return { theme: theme, colors: theme === "dark" ? DarkColors : LightColors };
};
