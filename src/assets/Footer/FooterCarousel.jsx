import React from 'react'
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import { MyProducts } from '../Products';




const products = MyProducts



const FooterCarousel = () => {

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", border: "", }}>
            <div style={{ width: "50%", display: "flex", }}>
                <Carousel
                    style={{ border: "" }}
                    // withIndicators
                    height={100}
                    slideSize="21%"
                    slideGap="none"
                    loop
                    align="start"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                    ]}
                >
                    {
                        products.slice(0,10).map((items) => {
                            const {imgsrc, id,price}= items
                            return <Carousel.Slide style={{  position:"relative"}} key={id} >
                                <h1 style={{color:"white"}} id='footercarotext'>hello</h1>
                                <img src={imgsrc} alt="" style={{objectFit:"cover", height:"100%"}} id='footercaro'/>
                                <div style={{backgroundColor:"#b28449", position:"absolute", top:"0", width:"2.5rem", textAlign:"center", color:"white"}}>{price}</div>
                            </Carousel.Slide>

                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default FooterCarousel