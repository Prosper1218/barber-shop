import React from 'react'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card } from '@mantine/core';
import Footer from '../Footer/Footer';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useNavigate } from "react-router-dom";





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
            paddingBottom: rem(50),
            // height: '150vh',

        },

    },


    inner: {
        position: 'relative',
        zIndex: 1,
        paddingTop:"0.2cm"
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


}));
const MainServices = () => {
    const Navigate = useNavigate()
    const { classes, cx } = useStyles();


    return (
        <div >
            <div className={classes.wrapper} id='gridcontainer'>
                <Overlay color="#000" zIndex={1} />
                <div className={classes.inner} >
                <Button className={cx(classes.control, classes.secondaryControl)} rightIcon={<ArrowLeftIcon />} onClick={() => Navigate("/")}> Back</Button>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />   
                    <br />   
                    <br />   
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />   
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
              

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainServices
