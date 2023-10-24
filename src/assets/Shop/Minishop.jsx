import React from 'react'
import SegmentInfo from '../Background/SegmentInfo'
import {  Button, Overlay, createStyles, rem, Grid, Card } from '@mantine/core';
import "../../assets/Ourservices/Services.css"
import rating from "../../imgs/rating.png"
import sharprazor from "../../imgs/sharprazor.jpg"
import bBrush from "../../imgs/bBrush.jpg"
import bCream from "../../imgs/bCream.jpg"
import bOil from "../../imgs/bOil.jpg"
import "../../App.css"
import { Link } from 'react-router-dom';
import { IconShoppingCart } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";




const useStyles = createStyles((theme) => ({
    productname: {
        color: theme.colors.gray[0],
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: "80%",
        textTransform: "capitalize",
        fontWeight: "bolder",

        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs,
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

    CardStyle: {
        maxWidth: 300,
        cursor: "pointer",
        paddingBottom: "1rem",
        [theme.fn.smallerThan('xs')]: {

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
          
            color: "#b28449",
            backgroundColor:"transparent",
            transition: "ease-out 0.2s",
        },
    },
    Shopnowbtn: {
        backgroundColor: 'transparent',
       color:"#b28449",
       border:"none",
       cursor:"pointer",
       scale:"0.8",

        '&:hover': {
            backgroundColor: 'transparent !important',
            color: "#b28449",
            transition: "ease-out 0.2s",
        },
    }

}));






const Minishop = () => {
    const { classes, cx } = useStyles();
    const Navigate = useNavigate()

    const Products = [
        {
            imgsrc: sharprazor,
            id: 1,
            name: "Master Sharp Razor",
            price: "$79",
        },
        {
            imgsrc: bBrush,
            id: 2,
            name: "Classic Shaving Brush",
            price: "$89",
        },
        {
            imgsrc: bCream,
            id: 3,
            name: "Deluxe Hair Styling",
            price: "$99",
        },
        {
            imgsrc: bOil,
            id: 4,
            name: "Wooden Brushes",
            price: "$59",
        },
     
    ]
    return (
        <div style={{ marginTop: "4rem" }}>
            <SegmentInfo title="Shop" head1='Our Best' head2='Products' />
            <div style={{ justifyContent: "center", display: "flex" }}>

                <Grid className='container' style={{ justifyContent: "center", alignContent: "start", width: "95%", marginLeft: "1rem", marginRight: "1rem" }} >

                    {
                        Products.map((product) => {
                            const { id, name, price, imgsrc } = product
                            return <Grid.Col className={classes.CardStyle} xs={5} sm={3} md={2.7} lg={2.7} xl={2.7} key={id} >
                                <Card shadow="md" padding="md" radius="none" withBorder style={{ backgroundColor: "rgb(38, 36, 36)", paddingBottom: "1rem", marginTop: "1rem", border: "none", }} id='shopc'>
                                    {/* <Card.Section className={classes.CardHeader} style={{ border: "1px solid #b28449", justifyItems: "flex-start", height: "auto" }} > */}
                                        <img src={imgsrc} alt="" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                                    {/* </Card.Section> */}
                                    <br />
                                    <div style={{ color: "white", lineHeight: "12px", justifyContent: "space-between", display: "flex" , marginTop:"0.2rem"}}>
                                        <p className={classes.productname} id='shopc'>{name}</p> <br />
                                        <p className={classes.productprice} id='shopc'>{price}</p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0.5rem" }} id='shopc'>
                                        <img src={rating} alt="" style={{ width: "9rem", margin:"0px", padding:"0px" }} />
                                        <IconShoppingCart className={classes.Shopnowbtn} onClick={()=>Navigate('/MainShop')}/>
                                    </div>

                                </Card>
                            </Grid.Col>
                        })
                    }

                </Grid>

            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.8rem" }}>
                <Link to='/MainShop'>
                    <Button className={cx(classes.control, classes.secondaryControl)} size="sm" radius="none">
                        SEE ALL PRODUCTS
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Minishop


