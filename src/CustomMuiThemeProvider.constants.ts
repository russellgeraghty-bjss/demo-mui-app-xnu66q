import React from "react";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";

export const CustomMuiThemeProviderContext = React.createContext(null);

export const lightStyles = {
  isLightTheme: true,
  typography: {
    myCustomProperty: "monospace"
  }
};

export const darkStyles = {
  isLightTheme: false,
  typography: {
    myCustomProperty: "Georgia"
  }
};

export type CustomTheme = Theme & typeof lightStyles;

export const appLightTheme = createMuiTheme(
  {
    palette: createPalette({})
  },
  lightStyles
) as CustomTheme;

export const appDarkTheme = createMuiTheme(
  {
    palette: createPalette({ type: "dark" }),
    overrides: {
      MuiButton: {
        sizeSmall: {
          color: "#FFF"
        }
      }
    }
  },
  lightStyles,
  darkStyles
) as CustomTheme;
