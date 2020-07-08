import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1, 
    fontSize: '0.6rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
}));

export default useStyles;