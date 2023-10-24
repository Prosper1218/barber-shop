import React, { useState, createContext, useEffect, useRef, useContext } from 'react'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card, Input } from '@mantine/core';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom'
import { notifications } from '@mantine/notifications';
import Footer from '../Footer/Footer';
import { UserAuth } from '../../App';





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

            // height: '150vh',

        },
        [theme.fn.smallerThan('xs')]: {

            // height: '220vh',

        },
    },


    inner: {
        position: 'relative',
        zIndex: 1,
        // paddingTop: "0.1cm"
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


const SignUp = () => {
    const { classes, cx } = useStyles();
    const Navigate = useNavigate()
    const { User, setUser } = useContext(UserAuth)
    const [Loading, setLoading] = useState(false)
    const passwordref = useRef()
    const [disabled, setdisabled] = useState(true)

    const HandleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const NewUser = Object.fromEntries(formData)
        console.log(NewUser)
        setLoading(true)
        e.currentTarget.reset()


        setTimeout(() => {
            setLoading(false)
            notifications.show({
                title: `hello ${formData.get('Name')}`,
                message: 'we have received your form! 🤥',
                color: "yellow"

            })
            Navigate("/")
            setUser(formData.get('Email'))
        }, 2500);

        // const user = formData.get('Name')
        // console.log(user)

    }

    const handlechange = () => {

        // console.log(passwordref.current.value)
        passwordref.current.value.length > 5 ? setdisabled(false) : setdisabled(true)
    }




    return (
        <div>
            <div className={classes.wrapper}>
                <Overlay color="#000" zIndex={1} />
                <div className={classes.inner}>

                    <Button className={cx(classes.control, classes.secondaryControl)} rightIcon={<ArrowLeftIcon />} onClick={() => Navigate("/")}> Back</Button>
                    {/*  */}
                    <div style={{ display: "flex", justifyContent: "center", padding: "0px", margin: "0px" }}>
                        <form id='form-container' onSubmit={HandleSubmit}>
                            <h4 style={{ textAlign: 'center', paddingTop: "0px", marginTop: "0px" }}>Sign in</h4>
                            <br />
                            <div>
                                <Input id="input-demo" placeholder="Name..."
                                    style={{ outline: "0.5px solid white" }}
                                    variant="filled"
                                    radius="xs"
                                    name='Name'
                                    type='text'
                                    size="xs"
                                    required

                                />
                            </div>
                            <br />
                            <div>
                                <Input id="input-demo" placeholder="Email..."
                                    style={{ outline: "0.5px solid white" }}
                                    variant="filled"
                                    radius="xs"
                                    name='Email'
                                    type='email'
                                    size="xs"
                                    required
                                />
                            </div>
                            <br />
                            <div>
                                <Input id="input-demo" placeholder="Password..."
                                    style={{ outline: "0.5px solid white" }}
                                    variant="filled"
                                    radius="xs"
                                    name='Password'
                                    type='password'
                                    size="xs"
                                    required
                                    ref={passwordref}
                                    onChange={handlechange}

                                />
                            </div>
                            <div id="shopc" style={{ fontSize: "x-small", marginTop: "0.2rem", marginBottom: "0.2rem" }}> {disabled ? <p style={{ color: "red" }}>Password Should be Atleast 6 letters!</p> : <p style={{ color: "green" }}>valid✔</p>}</div>

                            <br />
                            <div style={{ display: "flex", justifyContent: "center", padding: "0px", margin: "0px", position: "relative" }}>
                                <Button className={cx(classes.control, classes.secondaryControl)} size="sm" radius="none" type="submit" loading={Loading} disabled={disabled}>
                                    SUBMIT
                                </Button>
                            </div>
                            <br />
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default SignUp
