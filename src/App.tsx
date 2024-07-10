import React from "react";
import { SomeComponent } from "./SomeComponent";
import { CustomMuiThemeProvider } from "./CustomMuiThemeProvider";

interface IProps {}

export const App: React.FC<IProps> = props => {
  return (
    <CustomMuiThemeProvider>
      <SomeComponent />
    </CustomMuiThemeProvider>
  );
};
