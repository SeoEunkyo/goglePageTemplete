import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    root: {
        width: '100%',
        maxWidth: '100%',
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        textAlign: 'center',
        marginTop: '5%',
    }
}));


const Title = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h2" gutterBottom>
                Google
            </Typography>
        </div>
    );
};

export default Title
