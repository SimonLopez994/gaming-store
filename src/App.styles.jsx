import styled from "styled-components";
import Navigation from "./routes/navigation/navigation.component";

export const Slider = styled.div`
display:flex;
width:300%;
position:absolute;
top:0;
z-index:-10;


`

export const ImageContainer = styled.img`
width: 100vw;
height: 100vh;
filter:brightness(50%);

`

export const NavigationComponent = styled(Navigation)`
z-index:1000;`