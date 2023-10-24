import React from 'react'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card, Input, Textarea, Notification } from '@mantine/core';
import SegmentInfo from '../Background/SegmentInfo';
import { IconAt, IconCheck,} from '@tabler/icons-react';
import { useState } from "react";
import { notifications } from '@mantine/notifications';




const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        width: '100%',
        paddingTop: rem(12),
        paddingBottom: rem(100),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.fn.smallerThan('md')]: {
            // paddingTop: rem(0),
            paddingBottom: rem(50),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },
    CardStyle: {
        maxWidth: 350,

        [theme.fn.smallerThan('xs')]: {
            border: 'none',
        },
    },

    container: {
        [theme.fn.smallerThan('xs')]: {
            marginLeft: "1rem",
            marginRight: "1rem"
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





}));

const Contact = () => {
    const { classes, cx } = useStyles();
    const [Loading, setLoading] = useState(false)
    // const [User, setUser] = useState(
    //     {
    //         Name: "",
    //         Email: "",
    //         Number: "",
    //         Date: "",
    //         Message: "",

    //     }
    // )

    // const handleChange = (e) => {
    //     setUser({ ...User, [e.target.name]: e.target.value })

    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const NewUser = Object.fromEntries(formData)
        console.log(NewUser)
        e.currentTarget.reset()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            notifications.show({
                title: `hello ${formData.get('Name')}`,
                message: 'we have received your form! 🤥',
                color: "yellow"

            })
        }, 2500);


    }

    return (
        <div style={{ marginTop: "4rem", position: "relative" }} id='#contact'>

            <div className={classes.wrapper} id='contactbgimg'>

                <Overlay color="#000" opacity={0.50} zIndex={1} />
                <div className={classes.inner}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <SegmentInfo title="Contact Us" head1="Make An" head2="Appointment" />
                    <div>

                        <form action=" " onSubmit={handleSubmit}>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Grid className={classes.container} style={{ justifyContent: "center", gap: "1rem", width: "95%", }} >

                                    <Grid.Col className={classes.CardStyle} xs={5} sm={3} md={2.7} lg={2.7} xl={2.3} style={{}}>

                                        <Input id="input-demo" placeholder="Name..."
                                            variant="filled"
                                            radius="xs"
                                            name='Name'
                                            type='text'
                                            size="xs"
                                            required
                                        />
                                    </Grid.Col>
                                    <Grid.Col className={classes.CardStyle} xs={5} sm={3} md={2.7} lg={2.7} xl={2.3} style={{}}>
                                        <Input id="input-demo" placeholder="Email..."
                                            variant="filled"
                                            radius="xs"
                                            name='Email'
                                            type='email'
                                            size="xs"
                                            required
                                        />
                                    </Grid.Col>

                                </Grid>
                            </div>
                            <br />
                            {/* <br /> */}
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Grid className={classes.container} style={{ justifyContent: "center", gap: "1rem", width: "95%", }} >

                                    <Grid.Col className={classes.CardStyle} xs={5} sm={3} md={2.7} lg={2.7} xl={2.3} style={{}}>
                                        <Input id="input-demo" placeholder="Phone Number..."
                                            variant="filled"
                                            radius="xs"
                                            name='Number'
                                            type='number'
                                            size="xs"
                                            required />
                                    </Grid.Col>
                                    <Grid.Col className={classes.CardStyle} xs={5} sm={3} md={2.7} lg={2.7} xl={2.3} style={{}}>
                                        <Input id="input-demo" placeholder="Date..."
                                            variant="filled"
                                            radius="xs"
                                            name='Date'
                                            type='date'
                                            size="xs"
                                            required />

                                    </Grid.Col>

                                </Grid>
                            </div>
                            <br />
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Grid className={classes.container} style={{ justifyContent: "center", gap: "1rem", width: "95%", }} >

                                    <Grid.Col className={classes.CardStyle} xs={10.45} sm={6} md={5.60} lg={5.60} xl={4.77} style={{}} >
                                        <Textarea id="input-demo" className='textA'
                                            placeholder="Your Message"
                                            radius="xs"
                                            name='Message'
                                            size="xs"
                                            required

                                        />
                                    </Grid.Col>


                                </Grid>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
                                <Button className={cx(classes.control, classes.secondaryControl)} size="sm" radius="none" type="submit" loading={Loading}>
                                    SUBMIT
                                </Button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

const Notif = () => {
    return <div style={{ justifyContent: "center", display: "flex", }}>
        <Notification icon={<IconCheck size="1.2rem" />} title="We notify you that" id='notification'>
            We've received your Form
        </Notification>
    </div>

}

export default Contact



// how to use "context api"?
