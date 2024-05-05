import styled from "styled-components"

export const Slider = styled.div`
display:flex;
width:300%;
position:absolute;
top:0;
z-index:-100;
`

export const ImageContainer = styled.img`
width: 100vw;
height: 100vh;
filter:brightness(50%);
`

export const ReproductionBar = styled.div`
position:absolute;
bottom:1rem;
height:1px;
background-color:rgba(255,255,255,0.4);
width:0.5%;
`