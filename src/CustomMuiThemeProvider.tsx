import React, { useReducer } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  appLightTheme,
  CustomMuiThemeProviderContext
} from "./CustomMuiThemeProvider.constants";
import { toggleTheme } from "./CustomMuiThemeProvider.utils";

interface IProps {}

export const CustomMuiThemeProvider: React.FC<IProps> = props => {
  const [currentTheme, dispatch] = useReducer(toggleTheme, appLightTheme);

  return (
    <CustomMuiThemeProviderContext.Provider value={dispatch}>
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </CustomMuiThemeProviderContext.Provider>
  );
};

CustomMuiThemeProvider.displayName = "CustomMuiThemeProvider";
CustomMuiThemeProvider.defaultProps = {};
