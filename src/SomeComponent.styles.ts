import { createStyles, makeStyles } from "@material-ui/core/styles";
import { CustomTheme } from "./CustomMuiThemeProvider.constants";

export const useSomeComponentStyles = makeStyles((theme: CustomTheme) =>
  createStyles({
    root: {
      marginTop: 10,
      maxWidth: 345
    },
    media: {
      height: 140
    },
    title: {
      fontFamily: theme.typography.myCustomProperty
    }
  })
);
