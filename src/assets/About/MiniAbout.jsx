import React from 'react'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card } from '@mantine/core';
import './MiniAbout.css'
import { Link, useNavigate } from 'react-router-dom';
import SegmentInfo from '../Background/SegmentInfo';

import AWARD from "../../imgs/e.png";








const useStyles = createStyles((theme) => ({

    AboutCardHeader: {
        color: theme.colors.gray[0],
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: "70%",
        textTransform: "capitalize",
        fontWeight: "bold",

        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs,
        },
    },

    boxstyle: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "2.3cm",
        [theme.fn.smallerThan('md')]: {
            marginTop: "10rem",
        },
        [theme.fn.smallerThan('xs')]: {
            marginTop: "19.5rem",
            width: "100%",
        },
    },


    title: {
        fontWeight: 800,
        fontSize: rem(32),
        letterSpacing: rem(0.5),
        paddingBottom: "0px",
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(25),
            textAlign: 'center',

        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][1],
    },

    itemcontainer: {
        width: "100%",
        // border: "2px solid red",
     
        [theme.fn.smallerThan('xs')]: {
           marginTop:"2rem"
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
    CardStyle: {
        maxWidth: 350,
        cursor: "pointer",
        paddingBottom: "1rem",
        [theme.fn.smallerThan('xs')]: {

        },
    },

}));


const MiniAbout = () => {
    const Navigate = useNavigate()
    const { classes, cx } = useStyles();

    return (
        <div>
            <div className={classes.boxstyle}>
                <div className={classes.itemcontainer}>
                    <div className={classes.wrapper}>
                        {/* <Overlay color="#000" zIndex={1} /> */}
                        <div className={classes.inner}>

                            <br />
                            <Grid style={{marginLeft:"0.2rem", justifyContent: "center", gap: "1rem", paddingLeft: "1rem", paddingRight: "1rem", width:"100%" }}>
                                <Grid.Col className={classes.CardStyle} xs={5} md={3.5} xl={3.5} >
                                    <Card shadow="md" padding="sm" radius="none" withBorder style={{ backgroundColor: "transparent", border: "none" }}>
                                        <br />
                                        <SegmentInfo title="About Us" head1="The Best" head2="Barbershop" />

                                      <div style={{display:"flex", justifyContent:"center"}}>
                                            <Link to="/MainAbout">
                                                <Button className={cx(classes.control, classes.secondaryControl)} size="sm" radius="none">
                                                    KNOW MORE
                                                </Button>
                                            </Link>
                                      </div>
                                    </Card>
                                </Grid.Col>
                                <Grid.Col className={classes.CardStyle} xs={5} md={3.5} xl={3.5} >
                                    <Card shadow="md" padding="sm" radius="none" withBorder style={{ backgroundColor: "transparent", border: "none" }}>
                                        <img src={AWARD} alt="est2000" />
                                    </Card>
                                </Grid.Col>

                            </Grid>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MiniAbout



// https://img.freepik.com/premium-vector/king-barbershop-vintage-gold-logo-template_278810-688.jpg?w=740





{/* <Link to="/MainAbout">
<Button className={cx(classes.control, classes.secondaryControl)} size="sm" radius="none">
    KNOW MORE
</Button>
</Link> */}