import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { CustomTheme } from './CustomMuiThemeProvider.constants';
import { useSomeComponentStyles } from './SomeComponent.styles';
import { useThemeToggler } from './CustomMuiThemeProvider.utils';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

interface IProps {}

export const SomeComponent: React.FC<IProps> = (props) => {
  const classes = useSomeComponentStyles();
  const themeToggler = useThemeToggler();
  const theme = useTheme<CustomTheme>();

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Button
        variant="contained"
        onClick={() => themeToggler()}
        endIcon={theme.isLightTheme ? <Brightness3Icon /> : <Brightness7Icon />}
      >
        Toggle Theme
      </Button>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

SomeComponent.displayName = 'SomeComponent';
SomeComponent.defaultProps = {};
