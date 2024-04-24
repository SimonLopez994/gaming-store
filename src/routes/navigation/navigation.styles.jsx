import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.header`
padding:0.6rem 0rem;


`

export const HeaderContent = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
max-width:90rem;
margin:0 auto;
padding-top:0.5rem;

`
export const MenuContainer = styled.div`
transition:1s ease-in-out

`

export const MenuOptions = styled.div`
width: 100%;
height: 100vh;
max-width: 20rem;
background-color: rgba(255, 255, 255, 0.7);
position: absolute;
top: 0;
left:0;
transition: 1s ease-in-out;
transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-500px)')};
`

export const Ul = styled.ul`

display:flex;
flex-direction:column;
padding:2rem;`

export const LinkComponent = styled(Link)`
padding:2rem`

export const MenuInfoContainer = styled.div`
max-width:8rem;
width:100%;
display:flex;
justify-content: space-between;`