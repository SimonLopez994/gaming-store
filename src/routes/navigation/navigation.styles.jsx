import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.header`
padding:0.6rem 0rem;
z-index:2000;
`

export const HeaderContent = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
max-width:80%;

margin:0 auto;
padding-top:0.5rem;

`
export const MenuContainer = styled.div`

transition:1s ease-in-out
`

export const MenuOptions = styled.div`
width: 100%;
height: 100vh;
max-width: 25rem;
background-color: rgba(255, 255, 255, 1);
position: fixed;
top: 0;
left:0;
transition: 1s ease-in-out;
transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-500px)')};
z-index:200;
`

export const Ul = styled.ul`

display:flex;
flex-direction:column;
padding:2rem;`

export const LinkComponent = styled(Link)`
margin:2rem;
font-size:1.6rem;
text-decoration:none;
color:rgba(0, 159, 213, 0.9);`

export const MenuInfoContainer = styled.div`
max-width:8rem;
width:100%;
display:flex;
justify-content: space-between;`

export const IconWrapper = styled.div`
transition: transform 0.3s; 
cursor:pointer;
&:hover{
    transform: scale(1.4)
}
`