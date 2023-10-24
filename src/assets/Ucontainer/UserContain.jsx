import React from 'react'
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Userimg from "../../imgs/User.png"
import User1 from "../../imgs/User1.png"
import { motion } from "framer-motion";
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Group, Menu, Modal, Button } from '@mantine/core';
import { UserAuth } from '../../App';
import { ArrowLeftIcon } from '@radix-ui/react-icons';







const UserContain = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const { User, setUser } = useContext(UserAuth)

    return (
        <div >
            {
                User ? (<>
                    <Menu shadow="md" width={100} withArrow>
                        <Menu.Target>
                            <button style={{ display: "flex", justifyContent: "space-between", gap: "0.2rem", border: "none", backgroundColor: "transparent" }} > <img src={User1} alt="" style={{ width: "22px", cursor: "pointer", }} /><p id='shopc' style={{ fontSize: "100%", color: "white", marginTop: "0.5rem" }}>{User}</p></button>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <button onClick={() => setUser(null)} style={{ backgroundColor: "transparent", color: "red", border: "none" }} > <ArrowLeftIcon style={{ color: "red", scale: "1.2", paddingTop: "4.5px" }} />LogOut</button>
                        </Menu.Dropdown>
                    </Menu>
                </>) :
                    <>
                        <Modal.Root opened={opened} onClose={close}>
                            <Modal.Overlay />
                            <Modal.Content>
                                <Modal.Header>
                                    <Modal.Title>YOU DO NOT HAVE AN ACCOUNT 🤫🤥</Modal.Title>
                                    <Modal.CloseButton />
                                </Modal.Header>
                                <Modal.Body>
                                    <Link to={'/SIgnUp'}>Sign up</Link>
                                    {/* <p>hello</p> */}
                                </Modal.Body>
                            </Modal.Content>
                        </Modal.Root>
                        <Group position="center">
                            <img src={Userimg} alt="" onClick={open} style={{ width: "20px", cursor: "pointer", }} />
                        </Group>
                    </>
            }





        </div>
    )
}

export default UserContain














