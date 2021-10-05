import React from 'react';
import { Typography, Paper, Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Sidebar = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Container className={`${classes.root} ${classes.sidebar}`}>
                <Typography variant="h5" align="center">Welcome</Typography>
                
                <Typography variant="body1" align="center">
                    {`
                        You are currently not signed in.
                        To continue using Echoes 
                    `}
                </Typography>
                {/* <Typography>
                    <Link to="/auth">Sign In</Link>
                </Typography> */}
                <Button component={Link} to="/auth" variant="contained" color="success" fullWidth>
                    Sign In
                </Button>
            </Container>
        </Paper>
    );
}

export default Sidebar;
