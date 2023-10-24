
import React from 'react'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card } from '@mantine/core';
import mustache from "../../imgs/moustache.png";
import "./Services.css";
import barber1 from "../../imgs/barber1.png";
import barberchair from "../../imgs/barberchair.png";
import razor from "../../imgs/razor.png";
import clipper from "../../imgs/clipper.png";
import SegmentInfo from '../Background/SegmentInfo';
import { Link } from 'react-router-dom';







const useStyles = createStyles((theme) => ({

    ServicesCardHeader: {
        color: theme.colors.gray[0],
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: "70%",
        // textTransform: "uppercase",
        fontWeight: "bold",


        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs,
        },
    },
    mtext: {
        display: "block",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        lineHeight: "2",
        margin: "1.5rem",
        textAlign: "center",
        fontWeight: "300",
        color: theme.colors.gray[4],
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(25),
            textAlign: 'center',

        },

    },




    title: {
        fontWeight: 800,
        fontSize: rem(30),
        letterSpacing: rem(1),
        paddingBottom: "0px",
        textTransform: "capitalize",
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(25),
            textAlign: 'center',

        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][1],
    },


    description: {
        display: "block",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        lineHeight: "1.5",
        textAlign: "center",
        // fontWeight: "bold",
        color: theme.colors.gray[4],
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs,
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
        },
    },

    CardStyle: {
        maxWidth: 350,

        [theme.fn.smallerThan('xs')]: {
            border: 'none',
        },
    },



    secondaryControl: {
        backgroundColor: 'transparent',
        border: '1px solid #b28449',
        borderRadius: "none",
        textAlign: "center",
        fontSize: "xx-small",
        fontWeight: "800",
        color: theme.colors.gray[4],
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        boxShadow: "2px 2px 2px #b28449",


        '&:hover': {
            backgroundColor: 'transparent !important',
            color: "#b28449",
            transition: "ease-out 0.2s",
        },
    },

}));
const MiniServices = () => {
    const { classes, cx } = useStyles();

    const Info = [
        {
            id: 1,
            imgsrc: barber1,
            head: "CLIPPER CUT",
            text: " there are things people say in the barber shops they wont  even say in their own living room,because it's just one of those zones where there's freedom"

        },
        {
            id: 2,
            imgsrc: clipper,
            head: "BEARD TRIM",
            text: " there are things people say in the barber shops they wont  even say in their own living room,because it's just one of those zones where there's freedom"

        },
        {
            id: 3,
            imgsrc: razor,
            head: "FACE SHAVER",
            text: " there are things people say in the barber shops they wont  even say in their own living room,because it's just one of those zones where there's freedom"

        },
        {
            id: 4,
            imgsrc: barberchair,
            head: "BEAUTY PLACE",
            text: " there are things people say in the barber shops they wont  even say in their own living room,because it's just one of those zones where there's freedom"

        },
    ]

    return (
        <div style={{ display: "flex", justifyContent: "center", }}>

            <div style={{ width: "99%", height: "auto" }}>
                <br />
                <br />
                <br />
                <SegmentInfo title="Our Services" head1='Straight' head2='Styles' />

                {/*  */}
                {/*  */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "1.8rem" }}>


                    <Grid className='Grid'>

                        {
                            Info.map((data) => {
                                const { id, head, text, imgsrc } = data
                                return <Grid.Col className={classes.CardStyle} xs={5} sm={3} md={2.7} lg={2.5} xl={2.6} key={id}>
                                    <Card className={classes.ServicesCardHeader} shadow="md" padding="md" radius="none" withBorder style={{ backgroundColor: "transparent", border: "3px solid #b28449", textAlign: "center", color: "white" }} id="servicec">
                                        <br />
                                        <br />
                                        <img src={imgsrc} alt="icon" id='micon' />
                                        <br />
                                        <br />
                                        <h4 style={{ color: "white", }}>{head}</h4>
                                        <p className={classes.mtext} style={{ fontSize: "95%", fontWeight: "bolder", paddingBottom: "0.3rem", lineHeight: "1rem" }} id="servicec">{text} </p>

                                    </Card>
                                </Grid.Col>
                            })
                        }

                    </Grid>

                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "center", marginTop: "1.8rem" }}>
                    <Link to='/MainServices'>
                        <Button className={cx(classes.control, classes.secondaryControl)} size="sm" radius="none">
                            ALL SERVICES
                        </Button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default MiniServices
