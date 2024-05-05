import styled from 'styled-components'

export const ProductCardContainer = styled.div`
width: 100%;
display: flex;
min-height:22rem;
max-width:11rem;
background-color:white;
margin-right:2rem;
margin-bottom:1rem;

box-shadow: 0 10px 10px black;




flex-direction:column;
position: relative;
transition:0.5s ease-in-out;

&:hover{
  transform:scale(1.1);
  cursor:pointer;
  filter:brightness(100%);
  
}




button {
  font-size:1rem;
padding:0.5rem 1rem;
  
  opacity: 0.7;
position:absolute;
bottom:5%;
left:22%;

  display: none;
}

&:hover {




  button {
    opacity: 0.95;
    display: flex;
  }
}

`

export const DiscountContainer = styled.div`

width:3rem;
height:3rem;
display:flex;
align-items:center;
justify-content:center;
color:white;
position:absolute;
top:0%;
left:-7%;
background-color:rgba(0, 159, 213, 0.7);
border-radius:100%;
z-index:3000;`


export const ImgContainer = styled.div`

height:60%;
background-image: ${({ imageUrl }) => `url(${imageUrl})`};
background-position:center;
background-size:cover;



`
export const Footer = styled.div`

  width: 100%;
  
  align-items:center;
  text-align:center;
  justify-content: space-between;
   display: flex;
   flex-direction:column;
  font-size: 18px;
  position:absolute;
  top:65%;
  color:rgba(0, 159, 213, 0.9);

  `

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px; 
    font-size:1.3rem;
`
export const Price = styled.span`
text-decoration: line-through;
font-size:1.3rem;
  position:absolute;
  top:3rem;
  color:rgba(0,0,0,0.3);`

export const DiscountPrice = styled.span`
  font-size:1.3rem;
    position:absolute;
    top:5rem;
    
    span{
      color:rgba(0,0,0,0.3);
    }`
