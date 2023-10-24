import React, { createContext } from 'react'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card } from '@mantine/core';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';



const useStyles = createStyles((theme) => ({


    wrapper: {
        position: 'relative',
        width: '100%',
        height: '87vh',
        paddingTop: rem(12),
        paddingBottom: rem(130),
        backgroundImage:
            'url(./src/imgs/darkbg.jpeg)',
        backgroundSize: 'cover',
        objectFit: "contain",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        [theme.fn.smallerThan('sm')]: {
            // paddingTop: rem(0),
            // paddingBottom: rem(50),
            // height: '150vh',

        },
        [theme.fn.smallerThan('xs')]: {
            // paddingTop: rem(0),
            // paddingBottom: rem(50),
            // height: '220vh',

        },
    },


    inner: {
        position: 'relative',
        zIndex: 1,
        paddingTop: "0.2cm"
    },
    secondaryControl: {
        marginLeft: "0.3cm",
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




export const MyContext = createContext()
const SIgnIn = () => {
    const { classes, cx } = useStyles();
    const Navigate = useNavigate()
    const [User, setUser] = useState("")

    const Handlechange = (e) => {
        setUser(e.target.value)

    }
    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(User)
        setUser("")
        // Navigate("/")


    }

    return (

            <div className={classes.wrapper}>
                <Overlay color="#000" zIndex={1} />
                <div className={classes.inner}>

                    <Button className={cx(classes.control, classes.secondaryControl)} rightIcon={<ArrowLeftIcon />} onClick={() => Navigate("/")}> Back</Button>
                    {/*  */}
                    <div style={{ display: "flex", justifyContent: "center", padding: "0px", margin: "0px", }}>
                        <form id='form-container' onSubmit={HandleSubmit}>
                            <h4 style={{ textAlign: 'center', paddingTop: "0px", marginTop: "0px", color: "white" }}>Sign in</h4>
                            <div>
                                <label htmlFor="Email" style={{ fontSize: "70%" }}> Email</label>
                                <br />
                                <input type="email" name="email" id="Email" className='input' value={User} onChange={Handlechange} />
                            </div>
                            <p style={{ fontSize: "small", marginTop: "0.3px" }}> don't have an account? <Link to="/signUp" style={{ textDecoration: "none", color: "#b28449" }} >sign Up</Link></p>
                            <br />
                            <div style={{ display: "flex", justifyContent: "center", padding: "0px", margin: "0px", position: "relative" }}>
                                <button id='button' >Log In</button>
                            </div>
                            <br />
                        </form>
                    </div>
                </div>
                {/* <Footer/> */}
            </div>
    )
}

export default SIgnIn
