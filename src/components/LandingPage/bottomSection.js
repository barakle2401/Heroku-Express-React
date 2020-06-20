import React, { useEffect, useState, useRef } from 'react';

import { makeStyles, CardHeader, Box, Container, Grid, Paper, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
const useStyles = makeStyles(({
    root: {
        flexGrow: 1,
        paddingTop : "5rem",
        paddingBottom : "5rem"
    },
    card: {
          
    }, cardHeader: {

        
        height: "6rem"
    },

    media: {
        height: "10rem",
        width: "10rem"
    },
}));

function BottomSection() {
    const classes = useStyles();
    function CardRow() {
        return (
            <React.Fragment>
                
                <Grid item   lg={4} xs={12}   >

                    <Card className={classes.card}>
                    <Paper variant="outlined" elevation={3}>
                    <Box pl={2}boxShadow={3} >
                            <CardHeader
                                className={classes.cardHeader}
                                title="Log your junk food habits"

                            />
                        </Box>
                        <CardContent >
                        <Box pl={2} >
                            <CardMedia

                                className={classes.media}
                                image="https://cdn1.cronometer.com/2020/landing/cronometer-icon-3.png"

                            />
                              </Box>
                              <Box pl={2} mt={5}>
                            <Typography  variant="body2" color="textSecondary" component="p">
                              
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              
                            </Typography>
                            </Box>
                        </CardContent>
                        </Paper>
                    </Card>

                </Grid>
                <Grid item  lg={4} xs={12} >

                    <Card className={classes.card}>
                    <Paper variant="outlined" elevation={3}>
                    <Box pl={2}boxShadow={3} >
                            <CardHeader
                                className={classes.cardHeader}
                                title="Log your junk food habits"

                            />
                        </Box>
                        <CardContent >
                        <Box pl={2}>
                            <CardMedia

                                className={classes.media}
                                image="https://cdn1.cronometer.com/2020/landing/cronometer-icon-4.png"

                            />
                            </Box>
                            <Box pl={2} mt={5}>
                            <Typography  variant="body2" color="textSecondary" component="p">
                            
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            
                            </Typography>
                            </Box>
                        </CardContent>
                        </Paper>
                    </Card>

                    </Grid>
                        <Grid item lg={4} xs={12} >

                        <Card className={classes.card}>
                        <Paper variant="outlined" elevation={3}>
                        <Box pl={2}boxShadow={3} >
                                <CardHeader
                                    className={classes.cardHeader}
                                    title="Log your junk food habits"

                                />
                            </Box>
                            <CardContent >
                            <Box pl={2}>
                                <CardMedia

                                    className={classes.media}
                                    image="https://cdn1.cronometer.com/2020/landing/cronometer-icon-2.png"

                                />
                                </Box>
                                <Box pl={2} mt={5}>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                
                                </Typography>
                                </Box>
                            </CardContent>
                            </Paper>
                        </Card>

                        </Grid>
            </React.Fragment>
        );
    }

    return (


        
        <Container align="center"  alignitems="center">


                <Grid container justify="center" item  spacing={4}   className={classes.root}>
                    <CardRow />
                </Grid>

      </Container>



    );
}
export default BottomSection