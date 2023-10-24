import React from 'react'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card, Select, } from '@mantine/core';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom'
import cart from "../../imgs/cart.png";
import rating from "../../imgs/rating1.png"
import shoppingbag from "../../imgs/shoppingbag.png"
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from '../Footer/Footer';
import { MyProducts } from '../Products';
import { notifications } from '@mantine/notifications';




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
            // height: 'auto',


        },
        [theme.fn.smallerThan('xs')]: {
            paddingTop: rem(0),
            paddingBottom: rem(50),
            // height: '220vh',

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

    description: {
        display: "block",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "small",
        marginTop: "0.5rem",
        color: theme.colors.gray[4],
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs,

        },
    },



    Shoptitle: {
        fontWeight: 800,
        fontSize: rem(30),
        letterSpacing: rem(0.5),
        paddingBottom: "0px",
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: '#b28449',
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(25),
            textAlign: 'center',

        },
    },
    productname: {
        color: theme.colors.gray[0],
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: "80%",
        textTransform: "capitalize",
        fontWeight: "bolder",



        [theme.fn.smallerThan('sm')]: {
            fontSize: theme.fontSizes.xs,
            textAlign: "left",
        },
    },

    productprice: {
        color: '#b28449',
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: "100%",
        textTransform: "capitalize",
        fontWeight: "bold",

        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs,
        },
    },
    Shopnowbtn: {
        backgroundColor: 'transparent',
        color: "#b28449",
        border: "none",
        cursor: "pointer",
        scale: "0.6",

        '&:hover': {
            // backgroundColor: 'transparent !important',
            // color: "#b28449",
            transition: "ease-out 0.2s",
        },
    },

    CardStyle: {
        maxWidth: 400,
        cursor: "pointer",
        paddingBottom: "1rem",
        transition: "0.3s ease-in",

    },

    pdescription: {
        color: theme.colors.gray[0],
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: "80%",
        textTransform: "capitalize",
        fontWeight: "bolder",
        lineHeight: "1.5",
        // transition: "0.5s ease-out",



        [theme.fn.smallerThan('xs')]: {
            fontSize: "75%",
            textAlign: "left",
        },
    },
    Morebtn: {
        backgroundColor: "transparent",
        color: "#b28449",
        outline: "none",
        border: "none",
        cursor: "-webkit-grab"
    }

}));


const MainShop = () => {
    const [ourSproducts, setourSproducts] = useState(MyProducts)
    const { classes, cx } = useStyles();
    const Navigate = useNavigate()
    const filters = ['All', "Brushes", 'Beard Oil', "Razor", "Hair Shampoo", "Towels"]


    const refCont = useRef(filters[0])

    const filchange = () => {
        const filll = refCont.current.value
        // console.log(filll)

        if (filll === filters[0]) {
            setourSproducts(MyProducts)
        }
        if (filll === filters[1]) {
            setourSproducts(MyProducts.filter((obj) => obj.filterid === 2))
        }
        if (filll === filters[2]) {
            setourSproducts(MyProducts.filter((obj) => obj.filterid === 3))
        }
        if (filll === filters[3]) {
            setourSproducts(MyProducts.filter((obj) => obj.filterid === 1))
        }
        if (filll === filters[4]) {
            setourSproducts(MyProducts.filter((obj) => obj.filterid === 4))
        }
        if (filll === filters[5]) {
            setourSproducts(MyProducts.filter((obj) => obj.filterid === 5))
        }


    }

    const handleaddtocart = () => {
        notifications.show({
            title: `hello there`,
            message: 'Function Coming Soon!😑😏',
            color: "yellow",

        })
    }
    // 
    // 
    // 

    return (
        <div>
            <div className={classes.wrapper} id='gridcontainer'>
                <Overlay color="#000" zIndex={1} />
                <div className={classes.inner}>

                    <Button className={cx(classes.control, classes.secondaryControl)} rightIcon={<ArrowLeftIcon />} onClick={() => Navigate("/")} id='shopc'> Back</Button>


                    <div id='shopC'>
                        <div >
                            <h1 className={classes.Shoptitle}>Shop</h1>
                            <p className={classes.description} id='shopc'>Showing all {ourSproducts.length} results</p>
                        </div>
                        <div id='sel' >
                            <img src={cart} alt="" style={{ width: "2rem", height: "2rem", marginLeft: "1rem", marginRight: "1rem" }} />
                            <select id='shopc' style={{ height: "1.8rem", outline: "none" }} ref={refCont} name='Filter' onChange={filchange}>
                                {
                                    filters.map((filter) => {
                                        return <option key={filter} style={{ paddingTop: '1rem', lineHeight: "1rem" }}>
                                            {filter}
                                        </option>
                                    })
                                }
                            </select>

                        </div>


                    </div>
                    <br />

                    <motion.div
                        initial={{ x: -500 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 2, type: "spring", stiffness: 250, }}
                        style={{ justifyContent: "center", display: "flex", marginTop: "0rem" }} >

                        <Grid className='container' style={{ justifyContent: "center", alignContent: "start", width: "95%", marginLeft: "1rem", marginRight: "1rem", transition: "0.2s ease-out" }} >

                            {
                                ourSproducts.map((product) => {
                                    // const [Seemore, setSeemore] = useState(false)
                                    const { id, name, price, imgsrc, des } = product


                                    return <Grid.Col className={classes.CardStyle} xs={6} sm={3} md={2.7} lg={2.7} xl={2.7} key={id} style={{ justifyContent: "start" }}>
                                        <Card shadow="md" padding="md" radius="none" withBorder style={{ backgroundColor: "rgb(38, 36, 36)", paddingBottom: "1rem", marginTop: "1rem", border: "none", }}>

                                            <img src={imgsrc} alt="" style={{ width: "100%", height: "auto", objectFit: "contain" }} id='shopimg' />

                                            <br />
                                            <div style={{ color: "white", lineHeight: "12px", justifyContent: "space-between", display: "flex", marginTop: "0.3rem" }} >
                                                <p className={classes.productname} id='shopc'>{name}</p> <br />
                                                <p className={classes.productprice} id='shopc'>{price}</p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0.5rem", flexWrap: "wrap" }}>
                                                <img src={rating} alt="" style={{ width: "7.3rem", margin: "0px", padding: "0px", height: "-1" }} />
                                                <img src={shoppingbag} alt="" className={classes.Shopnowbtn} style={{ width: "2rem" }} onClick={handleaddtocart} />
                                            </div>
                                            <div style={{ textAlign: "left", }}>
                                                <Descrip des={des} />
                                            </div>

                                        </Card>
                                    </Grid.Col>
                                })
                            }

                        </Grid>

                    </motion.div>

                </div>

            </div>
            <Footer />
        </div>


    )
}



const Descrip = ({ des }) => {
    const [Seemore, setSeemore] = useState(false)
    const { classes, cx } = useStyles();

    return (
        <div>
            <p className={classes.pdescription} id='shopc' >
                {Seemore === false ? `${des.slice(0, 70)}...` : des} <button onClick={() => setSeemore(!Seemore)} className={classes.Morebtn} id='shopc'>{Seemore ? "Read Less" : "Read More"}</button>
            </p>
        </div>
    )
}


export default MainShop
