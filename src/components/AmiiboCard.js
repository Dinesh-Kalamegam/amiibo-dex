import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, CardContent} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
    root: {
        width: 300,
    },
    amiiboCardImageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "350px",
        textAlign: "center",
    }
}));

function AmiiboCard({ amiibo }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                title={amiibo.name}
                subheader={"EU Release : " + amiibo.release.eu}
            />
            <div className={classes.amiiboCardImageContainer}>
                <img
                    alt={amiibo.name}
                    src={amiibo.image}
                    style={{
                        width: "200px"
                    }}
                />

            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Amiibo Series: {amiibo.amiiboSeries}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Game Series: {amiibo.gameSeries}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Head: {amiibo.head}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Tail: {amiibo.tail}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Type: {amiibo.type}
                </Typography>
            </CardContent>

        </Card>
    )
}

export default AmiiboCard
