import React from 'react'
import { createStyles, rem, Grid, Card, } from '@mantine/core';
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({


    boxstyle: {
        position: "absolute",
        width: "100%",
        top: "-4rem",
        justifyContent: "center",
        paddingLeft:"1.5rem",
        paddingRight:"1.5rem",

        [theme.fn.smallerThan('md')]: {
            top: "1.5rem",
            // width: "90%",
        },
        [theme.fn.smallerThan('xs')]: {
            top: "-1.63rem",
        },
    },

    Card1content: {
        color: theme.colors.gray[0],
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        background: 'transparent',
        fontSize: "70%",
        textTransform: "uppercase",
        border: "2px solid red ",
        // backgroundImage:
        //     'url(./src/imgs/darkbg.png)',
        backgroundSize: 'cover',
        objectFit: "contain",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: "0.9",

        [theme.fn.smallerThan('xs')]: {
            fontSize: "x-small",
        },
    },

    CardStyle: {
        maxWidth: 350,
        [theme.fn.smallerThan('xs')]: {
            border: 'none',
        },
    }
}));
const GridComponent = () => {
    const { classes, cx } = useStyles();



    const Info = [
        {
            id: 1,
            head: "Address",
            text1: "123, New York City ",
            text2: " Washinton, D.C.70706",
            // img: "https://img.freepik.com/free-photo/handsome-man-barber-shop-styling-hair_1303-20978.jpg?size=626&ext=jpg&uid=R85448815&ga=GA1.2.1286271868.1674212119&semt=ais"
        },
        {
            id: 2,
            head: "About",
            text1: "Booking A Reservation ",
            text2: "For Anytime, anywhere."
        },
        {
            id: 3,
            head: "Opening Time",
            text1: "Mon-Sat 10am-10pm   ",
            text2: "Sunday 10am-4pm "
        },
    ]
    return (
        <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 4, type: "spring", stiffness: 200, }}

            style={{ display: "flex", justifyContent: "center", width:"100%"}} >

            <div className={classes.boxstyle}>
                <Grid style={{ justifyContent: "center", gap: "0", width:"100%", marginLeft:"0.1rem" }}>

                    {
                        Info.map((data) => {
                            const { id, head, text1, text2, img } = data
                            return <Grid.Col className={classes.CardStyle} sm={4} xs={4} md={3} xl={2.5} key={id} >
                                <Card shadow="md" padding="lg" radius="none" withBorder style={{ backgroundColor: "transparent", border: "3px solid #b28449", height: "auto" }} className={classes.Card1content} id="gridcontainer">
                                    <h4 style={{ color: "#b28449", }}>{head}</h4>
                                    <br />
                                    <p className={classes.CardHeader} style={{ fontSize: "85%", fontWeight: "bolder", paddingBottom: "0.3rem", lineHeight: "1rem", color: "white" }}>{text1} <br />
                                        {text2}</p>

                                </Card>
                            </Grid.Col>
                        })
                    }

                </Grid>
            </div>
        </motion.div>
    )
}

export default GridComponent
