import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 200,
        paddingTop: '56.25%', // 16:9
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
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={amiibo.name}
                subheader={"EU Release : " + amiibo.release.eu}
            />
            <CardMedia
                className={classes.media}
                image={amiibo.image}
                title={amiibo.name}
            />
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
