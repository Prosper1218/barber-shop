import React from 'react'
import SegmentInfo from '../Background/SegmentInfo'
import hair1 from '../../imgs/hair1.png'
import hair3 from '../../imgs/hair3.png'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card, Tabs } from '@mantine/core';
import mustache from "../../imgs/moustache2.png";
import mustachee from "../../imgs/moustache.png";
import { notifications } from '@mantine/notifications';
import '../../App.css'

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        width: '100%',

        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        [theme.fn.smallerThan('md')]: {

            // paddingTop: rem(0),
            // paddingBottom: rem(50),
        },
    },
    inner: {
        position: 'relative',
        zIndex: 1,
        [theme.fn.smallerThan('md')]: {
            paddingLeft: "2rem",
            paddingRight: "2rem",
        },
        [theme.fn.smallerThan('sm')]: {
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
        },

    },
    CardStyle: {
        maxWidth: 300,
        color: "black",
        // opacity: "0.8",
        backgroundColor: "transparent",
        border: "2px solid #b28449",

        backgroundSize: 'cover',
        objectFit: "contain",
        [theme.fn.smallerThan('xs')]: {
            marginLeft: "1rem"
        },
    },
    team: {
        paddingTop: "1.7rem",
        textAlign: 'center',
        fontSize: "90%",
        color: "#b28449",
        textTransform: "capitalize",
        fontWeight: "bolder",



        [theme.fn.smallerThan('sm')]: {
            fontSize: theme.fontSizes.xs,
        },
    },
    pricep: {
        paddingTop: "0.8rem",
        textAlign: 'center',
        fontSize: "150%",
        color: "white",
        // textTransform: "capitalize",
        fontWeight: "bolder",



        [theme.fn.smallerThan('sm')]: {
            // fontSize: theme.fontSizes.xs,
        },
    },

    secondaryControl: {
        height: "1.6rem",
        backgroundColor: 'black',
        border: '1px solid #b28449',
        color: "white",
        // borderRadius: "4px",
        textAlign: "center",
        fontSize: "xx-small",
        fontWeight: "800",
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        boxShadow: "2px 2px 2px #b28449",

        '&:hover': {

            color: "#b28449",
            backgroundColor: "transparent",
            border: "1px solid black",
            transition: "ease-out 0.2s",
        },
    },

}));


const Pricingplans = () => {
    const { classes, cx } = useStyles();

    const WeeklyPlan = [
        {
            team: "1 Person",
            price: '$79.00',
            timeFrame: "/Weekly",
            // serv1: " Haircut and Styling  ",
            // serv2: "  Beard Grooming",
            // serv3: " Hot Towel Shave  ",
            // serv4: " Facial Massage ",
            // serv5: " Hair Color and Highlights ",
            // serv6: "  Scalp Treatment ",

        },
        {
            team: "Team of 3",
            price: '$200.00',
            timeFrame: "/Weekly",
            // serv1: " Group Haircuts  ",
            // serv2: " Team Grooming Packages ",
            // serv3: "  Pre-Event Grooming ",
            // serv4: "VIP Lounge Experience  ",
            // serv5: "  Group Beard Styling",
            // serv6: "  Corporate Grooming Workshops ",
            // serv7: " Team-Building Events ",
            // serv8: " Hair Coloring Party ",
            // serv9: " Celebration Makeover ",
            // serv10: "On-Site Grooming Services ",


        },
        {
            team: "Team of 5",
            price: '$409.00',
            timeFrame: "/Weekly",
            // serv1: "   Corporate Grooming Day",
            // serv2: " Group Hair Styling Sessions ",
            // serv3: "  Customized Hair Coloring ",
            // serv4: " Team Spa Day ",
            // serv5: " Grooming and Relaxation Package ",
            // serv6: "   On-Site Barber Services",
            // serv7: "Beard Maintenance Classes  ",
            // serv8: " Team Grooming Retreat ",
            // serv9: " Special Event Styling ",
            // serv10: " Team Photoshoot Styling",
            // serv11: "Themed Grooming Parties ",
            // serv12: " Monthly Grooming Memberships ",
            // serv13: " Barber Workshops",
            // serv14: " Grooming Contests and Prizes",
            // serv15: " Mobile Grooming Services",

        },

    ]

    const MonthlyPlan = [
        {
            team: "1 Person",
            price: '$150.00',
            timeFrame: "/Monthly",
            // serv1: " Haircut and Styling  ",
            // serv2: "  Beard Grooming",
            // serv3: " Hot Towel Shave  ",
            // serv4: " Facial Massage ",
            // serv5: " Hair Color and Highlights ",
            // serv6: "  Scalp Treatment ",

        },
        {
            team: "Team of 3",
            price: '$600.00',
            timeFrame: "/Monthly",
            // serv1: " Group Haircuts  ",
            // serv2: " Team Grooming Packages ",
            // serv3: "  Pre-Event Grooming ",
            // serv4: "VIP Lounge Experience  ",
            // serv5: "  Group Beard Styling",
            // serv6: "  Corporate Grooming Workshops ",
            // serv7: " Team-Building Events ",
            // serv8: " Hair Coloring Party ",
            // serv9: " Celebration Makeover ",
            // serv10: "On-Site Grooming Services ",


        },
        {
            team: "Team of 5",
            price: '$1200.00',
            timeFrame: "/Monthly",
            // serv1: "   Corporate Grooming Day",
            // serv2: " Group Hair Styling Sessions ",
            // serv3: "  Customized Hair Coloring ",
            // serv4: " Team Spa Day ",
            // serv5: " Grooming and Relaxation Package ",
            // serv6: "   On-Site Barber Services",
            // serv7: "Beard Maintenance Classes  ",
            // serv8: " Team Grooming Retreat ",
            // serv9: " Special Event Styling ",
            // serv10: " Team Photoshoot Styling",
            // serv11: "Themed Grooming Parties ",
            // serv12: " Monthly Grooming Memberships ",
            // serv13: " Barber Workshops",
            // serv14: " Grooming Contests and Prizes",
            // serv15: " Mobile Grooming Services",

        },

    ]

    const handlePayment = () => {
        notifications.show({
            title: 'Hello there',
            message: ' Function Coming Soon! 🤥',
            color: "yellow"
        })
    }

    return (
        <div style={{ paddingTop: "4rem", height: "auto", paddingBottom: "2rem" }}>
            <SegmentInfo title='Pricing Table' head1='Pricing' head2='Plans' />

            <div style={{ justifyContent: "center", display: "flex", background: "transparent", }}>
                <div className={classes.wrapper}>

                    <div className={classes.inner} >

                        <Tabs defaultValue="first" variant='pills'>
                            <Tabs.List style={{ display: "flex", gap: "0px", justifyContent: "center" }}>
                                <Tabs.Tab value="first" className='tabbtn' color='yellow' >Weekly</Tabs.Tab>
                                <Tabs.Tab value="second" className='tabbtn' color='yellow'>Monthly</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="first" style={{ paddingTop: "1rem", height: "auto", marginTop: "1rem", width: "100%", diaplay: "flex", justifyContent: "center" }}>
                                <Grid className='pricingG' style={{ gap: "1rem" }}>
                                    {
                                        WeeklyPlan.map((plan) => {
                                            const { team, price, timeFrame, } = plan
                                            return <Grid.Col id='ppbg' className={classes.CardStyle} xs={4.5} sm={3.5} md={3} lg={2.5} xl={2.6} key={team} >

                                                <p className={classes.team} id='shopc'>{team}</p>
                                                <h5 className={classes.pricep} style={{ fontWeight: "bolder" }}>{price}</h5>
                                                <p style={{ textAlign: "center", fontSize: "small", fontWeight: "bold", color: "#b28449" }}>{timeFrame}</p>
                                                <div style={{ display: "flex", justifyContent: "center" }}>
                                                    <img src={mustachee} alt="mustache" id='mustacheimg' />
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", marginTop: "0.8rem" }}>
                                                    <Button className={cx(classes.control, classes.secondaryControl)} size="sm" radius="none" id='shopc' onClick={handlePayment}>
                                                        Get Started
                                                    </Button>
                                                </div>

                                                <br />

                                            </Grid.Col>
                                        })
                                    }


                                </Grid>
                            </Tabs.Panel>
                            <Tabs.Panel value="second" style={{ paddingTop: "1rem", height: "auto", marginTop: "1rem", width: "100%", diaplay: "flex", justifyContent: "center" }}>
                                <Grid className='pricingG' style={{ gap: "1rem" }}>
                                    {
                                        MonthlyPlan.map((plan) => {
                                            const { team, price, timeFrame, } = plan
                                            return <Grid.Col id='ppbg' className={classes.CardStyle} xs={4.5} sm={3} md={3} lg={2.5} xl={2.6} style={{ border: "2px solid white" }} key={team}  >

                                                <p className={classes.team} id='shopc'>{team}</p>
                                                <h5 className={classes.pricep} style={{ fontWeight: "bolder" }}>{price}</h5>
                                                <p style={{ textAlign: "center", fontSize: "small", fontWeight: "bold", color: "#b28449" }}>{timeFrame}</p>
                                                <div style={{ display: "flex", justifyContent: "center", margin: "0px", padding: "0px", }}> <img src={mustache} alt="mustache" id='mustacheimg' /></div>

                                                <div style={{ display: "flex", justifyContent: "center", marginTop: "0.8rem" }}>
                                                    <Button className={cx(classes.control, classes.secondaryControl)} size="sm" radius="none" id='shopc' onClick={handlePayment}>
                                                        Get Started
                                                    </Button>
                                                </div>

                                                <br />
                                                {/* <br /> */}
                                            </Grid.Col>
                                        })
                                    }


                                </Grid>
                            </Tabs.Panel>
                        </Tabs>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricingplans
