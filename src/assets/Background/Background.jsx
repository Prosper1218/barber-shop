import React from 'react'
import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';
import mustache from "../../imgs/moustache.png";
import NavigationBar from '../NavBar/NavigationBar';
import Section2 from '../Section2/Section2';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import background from "../../imgs/background.png";



const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        width: '100%',
        paddingTop: rem(12),
        paddingBottom: rem(170),
        objectFit: "contain",
        // backgroundImage:
        //     'url(./src/imgs/background.png)',
        // backgroundImage: {background},
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.fn.smallerThan('md')]: {
            paddingTop: rem(0),
            paddingBottom: rem(50),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    title: {
        fontWeight: 800,
        fontSize: rem(36),
        letterSpacing: rem(-1),
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        paddingTop: '5rem',

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(25),
            textAlign: 'center',

        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][1],
    },

    description: {
        color: theme.colors.gray[0],
        textAlign: 'center',
        fontFamily: "Greycliff CF, ${theme.fontFamily}",


        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs,
            textAlign: 'left',
            display: 'none',
        },
    },

    controls: {
        // border: "2px solid red",
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,
        display: 'flex',
        justifyContent: 'center',
        gap: "1rem",

        paddingLeft: theme.spacing.xl,
        paddingRight: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            // maxWidth: 350,

            flexDirection: 'row',
            height: "5rem",
            justifyContent: "center"
        },
    },

    control: {
        height: rem(42),
        fontSize: theme.fontSizes.sm,
        backgroundColor: '#b28449',
        color: 'white',
        border: "1px solid white",

        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan('xs')]: {
            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
        '&:hover': {
            backgroundColor: 'transparent !important',
            color: "#b28449",
            transition: "ease-out 0.2s",
        },
    },

    secondaryControl: {
        color: theme.white,
        backgroundColor: 'transparent',
        border: '1px solid #b28449',
        borderRadius: "none",

        '&:hover': {
            backgroundColor: 'transparent !important',
            color: "#b28449",
            transition: "ease-out 0.2s",
        },
    },
}));



const Background = () => {
    const { classes, cx } = useStyles();

    return (
        <div >
            <div className={classes.wrapper} id='mbg'>

                <Overlay color="#000" opacity={0.50} zIndex={1} />
                <div style={{ zIndex: 2, top: "0px", position: "relative", marginTop: "0px", paddingTop: "0px" }}><NavigationBar /></div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 4, type: "spring", stiffness: 200, }}
                    className={classes.inner}>

                    <Title className={classes.title} >
                        TRY A {' '}
                        <Text component="span" inherit className={classes.highlight} style={{ color: "#b28449" }}>
                            DIFFERENT
                        </Text> LOOK    <br />
                        IN YOUR {' '}
                        <Text component="span" inherit className={classes.highlight} style={{ color: "#b28449" }}>
                            STYLE
                        </Text>
                    </Title>
                    <div style={{ display: "flex", justifyContent: "center", margin: "0px", padding: "0px" }}> <img src={mustache} alt="mustache" id='mustacheimg' /></div>
                    <Container size={640}>
                        <Text size="xs" className={classes.description} id='BGTEXT' >
                            Doing Barbershops Has Made Us All Singers. When We Hit Just The Right<br />
                            Cord Together, There's No Better Feeling. Cheers To A Better  Look.
                        </Text>
                    </Container>
                    {/* <div style={{display:"felx", justifyContent:"center"}}> */}

                    <div className={classes.controls}>
                        <Link to='/MainAbout' style={{ textDecoration: "none", color: "white" }}>
                            <Button className={classes.control} variant="white" size="sm" radius="none" id='shopc' >
                                About Us
                            </Button>
                        </Link>
                        <Link to='/MainShop' style={{ textDecoration: "none", color: "white" }}>
                            <Button className={cx(classes.control, classes.secondaryControl)} size="sm" radius="none" id='shopc'>
                                Shop
                            </Button>
                        </Link>

                    </div>
                    {/* </div> */}
                </motion.div>
            </div>
            <Section2 />
        </div>


    )
}

export default Background
