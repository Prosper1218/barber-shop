import React from 'react'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card } from '@mantine/core';
import GridComponent from './GridComponent';
import MiniAbout from '../About/MiniAbout';
import MiniServices from '../Ourservices/MiniServices';
import mustache from "../../imgs/moustache2.png";
import OurBarbers from '../OurBarbers/OurBarbers';
import Pricingplans from '../Pricing Plans/Pricingplans';
import Minishop from '../Shop/Minishop';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HappyC from '../HappyCustomers/HappyC';
import AlertM from '../AlertM';




const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        width: '100%',
        height: 'auto',
        paddingTop: rem(12),
        paddingBottom: rem(130),
        // backgroundImage:'url(./src/imgs/darkbg.png)',
            
        backgroundSize: 'cover',
        objectFit: "contain",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        [theme.fn.smallerThan('sm')]: {
            paddingTop: rem(0),
            paddingBottom: rem(50),
            height: 'auto',

        },
        [theme.fn.smallerThan('xs')]: {
            paddingTop: rem(0),
            paddingBottom: rem(50),
            height: 'auto',

        },
    },


    inner: {
        position: 'relative',
        zIndex: 1,
    },


    CardHeader: {
        color: theme.colors.gray[0],
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        background: 'transparent',
        fontSize: "70%",
        textTransform: "uppercase",


        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs,
        },
    },

    CardStyle: {
        maxWidth: 350,
        border: "1px solid #b28449",
        [theme.fn.smallerThan('xs')]: {
            border: 'none',
        },
    },
    // bg2: {
    //     border:"2px solid red",
    //     // marginTop: "4rem",
    //     width: '85%',
    //     height: '100%',
    //     paddingTop: rem(18),
    //     paddingBottom: rem(130),
    //     backgroundImage:
    //         'url(./src/imgs/bg2.png)',
    //     backgroundSize: 'cover',
    //     objectFit: "contain",
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     filter: "brightness(70%)",
    //     [theme.fn.smallerThan('xs')]: {
    //         height: "38vh",
    //         paddingTop: rem(9),
    //         paddingBottom: rem(20),
    //     },
    //     [theme.fn.smallerThan('sm')]: {
    //         height: "20vh",
    //         width: '90%',
    //     },
    //     [theme.fn.smallerThan('lg')]: {
    //         height: "27vh",

    //     },
    //     [theme.fn.smallerThan('md')]: {
    //         height: "24vh",

    //     },

    // },
    // square: {

    //     position: "absolute",
    //     top: "4rem",
    //     bottom: "4rem",
    //     left: "4rem",
    //     right: "4rem",

    //     [theme.fn.smallerThan('sm')]: {
    //         top: "2rem",
    //         bottom: "2rem",
    //         left: "2rem",
    //         right: "2rem",
    //         border: "7px solid white",
    //     },
    // },

    title: {
        fontWeight: 800,
        fontSize: rem(32),
        letterSpacing: rem(0.5),
        paddingBottom: "0px",
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        paddingTop: "3rem",
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(20),
            paddingTop: "0rem",

            textAlign: 'center',

        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][1],
    },

    // mbox: {
    //     marginTop: "2rem",
    //     border:"2px solid green",
    //     height:"15rem",

    //     [theme.fn.smallerThan('xs')]: {
    //         // marginTop:"26rem"
    //     },
    // }

}));



const Section2 = () => {


    const { classes, cx } = useStyles();

    return (
        <div>

            <div className={classes.wrapper} id='dabg'>

                <Overlay color="#000" zIndex={1} />
                <div className={classes.inner}>


                    <GridComponent />
                    <MiniAbout />
                    <MiniServices />
                    <Pricingplans />
                    <div></div>
                    <br />
                    <OurBarbers />
                    <Minishop />
                    <HappyC />
                    <Contact />
                    <Footer />
                    {/* <AlertM /> */}


                </div>
            </div>


        </div>
    )
}















export default Section2
//   <Overlay color="#000" zIndex={0} opacity={0.5} />

