import React from 'react'
import pp1 from "../../imgs/pp1.jpg"
import PP2 from "../../imgs/PP2.jpg"
import PP3 from "../../imgs/PP3.jpg"
import SegmentInfo from '../Background/SegmentInfo'
import './HappyC.css'
import rating from "../../imgs/rating.png"
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card } from '@mantine/core';




const useStyles = createStyles((theme) => ({

  ServicesCardHeader: {
    color: theme.colors.gray[0],
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: "70%",
    // textTransform: "uppercase",
    fontWeight: "bold",


    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.xs,
    },
  },

  CardStyle: {
    maxWidth: 350,

    [theme.fn.smallerThan('xs')]: {
      border: 'none',
    },
  },
  commenttext: {
    paddingTop: "0px",
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    lineHeight: "1",
    fontSize: "small",
    margin: "1.5rem",
    textAlign: "center",
    fontWeight: "200",
    color: theme.colors.gray[4],
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    [theme.fn.smallerThan('xs')]: {
      // fontSize: rem(25),
      textAlign: 'center',

    },

  },
  commenttitle: {
    paddingTop: "0.3rem",
    fontWeight: 500,
    fontSize: "small",
    letterSpacing: rem(0.5),
    color: '#b28449',
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {


    },
  },


}));





const HappyC = () => {
  const { classes, cx } = useStyles();

  const Testimonies = [
    {
      id: 1,
      imgsrc: pp1,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque placeat ut saepe obcaecati quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, architecto.",
      name: 'Morice Johnson',
      title: "customer"
    },
    {
      id: 2,
      imgsrc: PP2,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque placeat ut saepe obcaecati quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, architecto.",
      name: 'Andre Gide',
      title: "customer"
    },
    {
      id: 3,
      imgsrc: PP3,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque placeat ut saepe obcaecati quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, architecto.",
      name: 'Chief Seottle',
      title: "customer"
    },

  ]
  return (

    <div style={{ paddingTop: "4rem", }}>

      <SegmentInfo title='Testimonials' head1="Happy" head2="Customers" />

      <Grid style={{ justifyContent: "center", marginLeft:"0.2rem" }} className='Gridd'>

        {
          Testimonies.map((data) => {
            const { id, imgsrc, comment, name, title } = data
            return <Grid.Col className={classes.CardStyle} xs={4.9} sm={3.6} md={3.4} lg={3.4} xl={3.4} key={id} style={{ backgroundColor: "transparent", border: "3px solid #b28449", textAlign: "center", color: "white", gap: "2rem" }} id='shopc'>
              <div style={{ display: "flex", justifyContent: "center", position: "relative" }}> <img src={imgsrc} alt={name} style={{ width: "4.4rem", height: "4.2rem", objectFit: "cover", borderRadius: "70%", position: "absolute", top: "-2.5rem", border: "3px solid #b28449" }} /></div>
              <img src={rating} alt="" style={{ width: "9rem", margin: "0px", padding: "0px", paddingTop: "1.8rem" }} />

              <p className={classes.commenttext} style={{ fontSize: "70%", fontWeight: "bolder", lineHeight: "1rem" }} id='shopc'>{comment} </p>
              <hr id='horiline' />
              <p className={classes.commenttitle}>{name}</p>
              <p className={classes.commenttitle} style={{ color: "white" }}>{title}</p>
              <br />

            </Grid.Col>
          })
        }

      </Grid>
      <br />
      <br />
    </div>
  )
}

export default HappyC
