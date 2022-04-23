import { Container, makeStyles } from '@material-ui/core';

interface AppContainerProps {
  children: JSX.Element;
}

const useStyles = makeStyles({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export const AppContainer = ({ children }: AppContainerProps) => {
  const classes = useStyles();
  return <Container className={classes.root} maxWidth={'lg'}>{children}</Container>;
};

