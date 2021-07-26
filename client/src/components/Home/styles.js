import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // to make it for small devices only
  // currently not working 
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    }
  }
}));