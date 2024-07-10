import { useContext } from "react";
import {
  appDarkTheme,
  appLightTheme,
  CustomMuiThemeProviderContext,
  CustomTheme
} from "./CustomMuiThemeProvider.constants";

export const useThemeToggler = () => useContext(CustomMuiThemeProviderContext);

export const toggleTheme = (
  state: CustomTheme,
  action: string
): CustomTheme => {
  if (state.palette.type === "light") {
    return appDarkTheme;
  }

  return appLightTheme;
};
