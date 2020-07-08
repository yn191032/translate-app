import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    padding: 6,
    marginRight: 10,
    backgroundColor: fade(theme.palette.common.white, 0.04),
  },
  typography: {
    fontSize: '0.6em',
    fontWeight: 'bold'
  },
}));

export default useStyles;