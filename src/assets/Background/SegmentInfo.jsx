import React from 'react'
import { Title, Text, Container, Button, Overlay, createStyles, rem, Grid, Card } from '@mantine/core';
import mustache from "../../imgs/moustache.png";







const useStyles = createStyles((theme) => ({

    SegmentinfoCardHeader: {
        color: theme.colors.gray[0],
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: "70%",
        textTransform: "capitalize",
        fontWeight: "bold",

        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs,
        },
    },


    title: {
        fontWeight: 800,
        fontSize: rem(32),
        letterSpacing: rem(0.5),
        paddingBottom: "0px",
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(25),
            textAlign: 'center',

        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][1],
    },


    description: {
        display: "block",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        lineHeight: "1.5",
        textAlign: "center",
        fontWeight: "bold",
        color: theme.colors.gray[4],
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs,
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
        },
    },


}));

const SegmentInfo = ({title, head1, head2}) => {
    const { classes, cx } = useStyles();

    return (
        <div style={{width:"100%", justifyContent:"center"}}>
    
            <Title className={classes.SegmentinfoCardHeader} style={{ color: "#b28449", }} id='seginfotitle'>{title}</Title>
            <Title className={classes.title} >{head1}{''}
                {''}<Text component="span" inherit className={classes.highlight} style={{ color: "#b28449" }}>  {head2}</Text>
            </Title>
            <div style={{ display: "flex", justifyContent: "center", margin: "0px", padding: "0px", }}> <img src={mustache} alt="mustache" id='mustacheimg' /></div>

            <Text className={classes.description} style={{ fontSize: "65%", }} id='seginfoText'>
                there are things people say in the barber shops they wont even say in their own living<br /> 
                 room,because it's just one of those zones where there's freedom

            </Text>

        </div>
    )
}

export default SegmentInfo
