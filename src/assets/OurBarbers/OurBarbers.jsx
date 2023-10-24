import React from 'react'
import SegmentInfo from '../Background/SegmentInfo'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card } from '@mantine/core';
import prof1 from "../../imgs/prof01.png";
import prof2 from "../../imgs/prof2.png";
import prof3 from "../../imgs/prof03.png";
import prof4 from "../../imgs/prof4.jpg";
import '../../App.css'





const useStyles = createStyles((theme) => ({

  themrole: {
    color: "#b28449",
    textAlign: "center",
    paddingTop: "0.3rem",
    paddingBottom: "0.9rem",
    // fontWeight: "bold",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.xs,
      // paddingLeft: "1.5rem",
      // paddingRight: "1.5rem",
    },
  },
  boxstyle: {

    paddingLeft: "4rem",
    paddingRight: "4rem",
    [theme.fn.smallerThan('md')]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    [theme.fn.smallerThan('xs')]: {
      // top: "2.3rem",
    },
  },

  CardHeader: {
    paddingTop: "0.8rem",
    color: theme.colors.gray[1],
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: "82%",
    letterSpacing: "1px",
    // textTransform: "uppercase",
    fontWeight: "",


    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.xs,
    },
  },

  CardStyle: {
    maxWidth: 350,

    [theme.fn.smallerThan('xs')]: {
      // border: 'none',
    },
  }
  ,
  profs: {
    width: "80%",
    height: " 50%",
    objectFit: "cover",
    backgroundSize: "cover"
    ,
    [theme.fn.smallerThan('sm')]: {
      border: "2px solid red",
      width: "100%",
    },
    [theme.fn.smallerThan('xs')]: {
      border: "2px solid green",
      width: "80%",
    },



  }
}));


const OurBarbers = () => {
  const { classes, cx } = useStyles();

  const BARBERS = [
    {
      id: 1,
      imgsrc: prof1,
      name: "Michael Sharelin",
      role: "Beard & Trimming"

    },
    {
      id: 2,
      imgsrc: prof2,
      name: "Hassib Hossain",
      role: "Haircut Specialist"

    },
    {
      id: 3,
      imgsrc: prof3,
      name: "Elbert Hubbard",
      role: "Makeup Artist"

    },
    {
      id: 4,
      imgsrc: prof4,
      name: "Greta Palma",
      role: "Beauty Expert"

    },
  ]
  return (
    <div style={{ marginTop: "2rem" }}>

      <SegmentInfo title="Our Barbers" head1="Professional" head2='Team' />
      <br />
      <br />
      <div>
        <div className={classes.boxstyle}>
          <div id='cont' >

            {
              BARBERS.map((info) => {
                const { imgsrc, id, name, role } = info
                return <div className="inner" key={id}>
                  <img src={imgsrc} alt="" style={{ width: "100%", height: "auto" }} />
                  <h5 className={classes.CardHeader}>{name}</h5>
                  <h6 className={classes.themrole}>{role}</h6>
                </div>
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default OurBarbers
