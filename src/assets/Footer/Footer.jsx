import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp, IconBrandYoutube } from '@tabler/icons-react';
import FooterCarousel from './FooterCarousel';
// import lnks from "../NavBar/NavigationBar"

const Footer = () => {

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

  ]

  const icons = [
    {
      id: 1,
      icon: <IconBrandYoutube />
    },
    {
      id: 2,
      icon: <IconBrandFacebook />
    },
    {
      id: 3,
      icon: <IconBrandInstagram />
    },
    {
      id: 4,
      icon: <IconBrandTwitter />
    },
    {
      id: 5,
      icon: <IconBrandWhatsapp />
    },





  ]

  return (

    <div >


      <footer >
        <div className="footer">
          <div className="row">
            {
              icons.map((icon) => {
                return <Link key={icon.id} className='fa'> {icon.icon}</Link>
              })
            }
          </div>

          <div className="row" >
            <ul>
              {
                links.map((link) => {
                  return <Link key={link.id} to={link.to} >{link.name}</Link>
                })
              }
            </ul>
          </div>
          <FooterCarousel />
          <div className="row">
            INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Prosper Williams
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
