import { EmailIcon, FacebookIcon, WhatsappIcon } from "react-share";
import {
    EmailShareButton,
    FacebookShareButton,
    WhatsappShareButton,
} from "react-share";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Product } from "../../types/productsType";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: "1rem",
        paddingTop: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    cardAction: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    cardImage: {
        width: "14rem",
        height: "14rem",
    },
    cardActionBtn: {
        display: "flex",
    },
    priceText: {
        display: "flex",
        alignItems: "center",
        marginTop: "1.5rem",
    },
});

interface Cards {
    cardInfo: Product;
}

export default function Cards({ cardInfo }: Cards) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.cardAction}>
                <img
                    src={cardInfo?.image}
                    alt={cardInfo?.title}
                    className={classes.cardImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {cardInfo?.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {cardInfo?.description}
                    </Typography>
                    <Typography
                        className={classes.priceText}
                        gutterBottom
                        variant="h3"
                        component="h4"
                    >
                        <Typography gutterBottom variant="h5" component="h4">
                            Price:
                        </Typography>{" "}
                        ${cardInfo?.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActionBtn}>
                <div>
                    <EmailShareButton
                        subject={cardInfo?.title}
                        body={cardInfo?.description}
                        url={"http://localhost:3000"}
                    >
                        <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                    <WhatsappShareButton
                        title={cardInfo?.title}
                        url={"http://localhost:3000"}
                    >
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    <FacebookShareButton
                        quote={cardInfo?.title}
                        url={"http://localhost:3000"}
                    >
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                </div>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
