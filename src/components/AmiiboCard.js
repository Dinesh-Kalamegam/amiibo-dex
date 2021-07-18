import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { BorderColor } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    media: {
        height: 300,
        // border:'solid 1px black',
        // backgroundImage:{amiibo.image},
        
        
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
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
            {/* <CardMedia
                className={classes.media}
                image={amiibo.image}
                title={amiibo.name}
            /> */}
            <div
                style={
                    {
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        width:"100%",
                        height:"350px",
                        textAlign:"center",
                    }
                }
            >
                <img 
                src={amiibo.image}
                style={{
                    width:"200px"
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
