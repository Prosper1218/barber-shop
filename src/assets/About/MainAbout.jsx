import React from 'react'
import MiniAbout from './MiniAbout'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card } from '@mantine/core';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer';
import { motion } from "framer-motion";
import SegmentInfo from '../Background/SegmentInfo';
import AWARD from "../../imgs/e.png";



const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        width: '100%',
        height: 'auto',
        paddingTop: rem(12),
        paddingBottom: rem(130),
        // backgroundImage:
        //     'url(./src/imgs/darkbg.png)',
        backgroundSize: 'cover',
        objectFit: "contain",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        [theme.fn.smallerThan('sm')]: {
            paddingTop: rem(0),
            paddingBottom: rem(80),
          

        },
     
    },


    inner: {
        position: 'relative',
        zIndex: 1,
        paddingTop: "0.2cm"
    },
    secondaryControl: {
        marginLeft: "0.2cm",
        backgroundColor: 'transparent',
        border: '1px solid #b28449',
        borderRadius: "none",
        textAlign: "center",
        fontSize: "xx-small",
        fontWeight: "800",
        color: theme.colors.gray[4],
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        // boxShadow: "2px 2px 2px #b28449",

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
    title: {
        fontWeight:800,
        fontSize: rem(29),
        letterSpacing: rem(-1),
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        // paddingTop: '5rem',

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(25),
            textAlign: 'center',

        },
    },
}));



const MainAbout = () => {
    const { classes, cx } = useStyles();
    const Navigate = useNavigate()
    return (
        <div>
            <div className={classes.wrapper} id='gridcontainer'>
                <Overlay color="#000" zIndex={1} />
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 4, type: "spring", stiffness: 200, }}
                    className={classes.inner}>

                    <Button className={cx(classes.control, classes.secondaryControl)} rightIcon={<ArrowLeftIcon />} onClick={() => Navigate("/")}> Back</Button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Grid style={{ justifyContent: "center", gap: "1rem", paddingLeft: "1rem", paddingRight: "1rem" , marginLeft:"0.2rem"}}>
                        <Grid.Col className={classes.CardStyle} xs={5} md={3.5} xl={3.5} >
                            <Card shadow="md" padding="sm" radius="none" withBorder style={{ backgroundColor: "transparent", border: "none" }}>
                                <br />
                                <SegmentInfo title="About Us" head1="The Best" head2="Barbershop" />
                            </Card>
                        </Grid.Col>
                        <Grid.Col className={classes.CardStyle} xs={5} md={3.5} xl={3.5} >
                            <Card shadow="md" padding="sm" radius="none" withBorder style={{ backgroundColor: "transparent", border: "none" }}>
                                <img src={AWARD} alt="est2000"  />
                            </Card>
                        </Grid.Col>

                    </Grid>


                    <br />
                    <br />

                    <h2 className={classes.title}>Brief History Of Urban Shave</h2>
                </motion.div>
                
                <br />
                <br />
                <br />
            </div>
            <Footer />
        </div>
    )
}

export default MainAbout
