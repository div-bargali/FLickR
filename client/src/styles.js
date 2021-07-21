import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
  },

  heading: {
    color: '#DD00FF',
    fontFamily: 'Countryside',
    // fontSize: '3.75rem',
  },
  
  image: {
    marginLeft: '15px',
  },

  // to make it for small devices only
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    }
  }
}));