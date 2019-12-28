import React from 'react'
import {Avatar, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    root: {
        textAlign : 'center',
        padding : theme.spacing(1)
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        borderRadius : '50%',
    }

}));


const RecommendItem = (props) => {
    const classes = useStyles();
    const item = props.item;
    return (
        <div className={classes.root}>
            <div>
                <Link href="https://www.naver.com/">
                <img  className={classes.large}  src={item.picture}  />
                </Link>
            </div>
            <label>{item.title}</label>
        </div>
    );
};

export default RecommendItem
