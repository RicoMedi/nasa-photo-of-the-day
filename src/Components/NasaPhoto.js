import React from 'react';
import styled from 'styled-components'

const StyledCard= styled.div`
border: 1px solid black;
border-radius: 12px
background-color: :
}}

`
const ImageContainer = styled.img`
border: 4px solid white
`
const Header = styled.h2`
color: white;
text-shadow: -1px 1px 0 #000,
                          1px 1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
font-size: 40px;

`
const Date = styled.p`
font-size: 30px;
color: white;
text-shadow: -1px 1px 0 #000,
                          1px 1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
`
const Paragraph = styled.p`
font-size: 18px;
padding: 10px;
border: 4px solid white;
background: white;
font-family: Lucida Console;
direction: ltr;


`

const NasaPhoto = (props) => {

    return (
      <StyledCard className= 'nasa-photo-wrapper'>
        <Header>{props.photo.title}</Header>
        <ImageContainer src={props.photo.hdurl}/>
        <Date>{props.photo.date}</Date>
        <Paragraph className='main-photo-explanation'>{props.photo.explanation}</Paragraph>
      </StyledCard> 
    )
}
 

    

export default NasaPhoto;