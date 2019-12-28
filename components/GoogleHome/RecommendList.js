import React from 'react'
import RecommendItem from './RecommendItem';

import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  const Recommendations = [
      {key: 0 , picture : 'http://placeimg.com/120/120/any' , title : 'Ramdom' },
      {key: 1 , picture : 'http://placeimg.com/120/120/people' , title : 'people'},
      {key: 2 , picture : 'http://placeimg.com/120/120/tech' , title : 'Tech'},
      {key: 3 , picture : 'http://placeimg.com/120/120/animals' , title : 'Animals'},
      {key: 4 , picture : 'http://placeimg.com/120/120/arch' , title : 'Architecture'},
  ];


const RecommendList = () => {
    const [spacing, setSpacing] = React.useState(6);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {Recommendations.map(value => (
                            <Grid key={value.key} item>
                                <RecommendItem item={value}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default RecommendList;


// 김성훈 - LG 010 9514 5716