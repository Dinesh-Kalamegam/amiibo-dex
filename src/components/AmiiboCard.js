import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core'
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
    const info = {
        "Amiibo Series": amiibo.amiiboSeries,
        "Game Series": amiibo.gameSeries,
        "Head": amiibo.head,
        "Tail": amiibo.tail,
        "Type": amiibo.type
    }
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
                {
                    Object.entries(info).map(([k, v]) => (
                        <Typography variant="body2" color="textSecondary" component="p">
                            {k}: {v}
                        </Typography>
                    ))
                }

            </CardContent>

        </Card>
    )
}

export default AmiiboCard
