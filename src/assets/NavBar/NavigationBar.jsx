import React from 'react'
import './Nav.css';
import { useState } from "react";
import { Menu, Title, createStyles, } from '@mantine/core';
import { Link } from "react-router-dom";
import logo1 from '../../imgs/logo1.png'
import { motion } from "framer-motion";

import UserContain from '../Ucontainer/UserContain';





const useStyles = createStyles((theme) => ({
    links: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    }

}));





const NavigationBar = () => {

    const [active, setactive] = useState("menu")
    const [icon, seticon] = useState("icon")

    const togglenav = () => {

        active === "menu" ? setactive("menu active") : setactive("menu")
        icon === "icon" ? seticon("icon icon2") : seticon("icon")
    }



    const { classes, cx } = useStyles();


    const links = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "About Us",
            to: "/MainAbout"
        },
        {
            id: 3,
            name: "Services",
            to: "/MainServices"

        },

        {
            id: 4,
            name: "Shop",
            to: "/MainShop"

        },
        {
            id: 5,
            name: "Contact",
            to: ""

        },
        {
            id: 6,
            // name: <button style={{ background: "transparent", outline: "none", border: "none" }} ><Mymenu /></button>,
            name: <UserContain />,
            // name: <Button style={{ background: "transparent" }} ><img src={User} alt=" user" style={{ width: "20px", cursor: "pointer", }} onClick={handlenotify} /></Button>,
            to: "#"

        },

    ]
    return (
        <motion.div

            initial={{ y: -200, }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
            <nav id='nav'>
                {/* <h2>Brand</h2> */}
                <img src={logo1} alt="" id="logo" />
                <ul className={active}>
                    {links.map((link) => {
                        return <Link key={link.id} className={classes.links} id='lk' to={link.to}  >
                            {link.name}
                        </Link>
                    })}

                </ul>

                <div onClick={togglenav} id='btn'><Icon /></div>

            </nav>
            {/* <Mymenu /> */}
        </motion.div>
    )
}

import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';


const Icon = () => {



    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';
    return <Burger opened={opened} onClick={toggle} aria-label={label} color="#b28449" id='burg' />;

}


export default NavigationBar






// onClick={() => alert("/SIgnin")} 
{/* <Link to={"/SIgnin"} style={{color:"black"}}>SIgn in</Link> */ }
{/* <p onClick={() => Navigate("/SIgnin")}>Sign In</p> */ }
{/* <Button onClick={() => navigate("/SIgnin")}>SignIN</Button> */ }