import styled from "styled-components";

export const AuthenticationContainer = styled.div`
display: flex;
width: 100%;
padding-top:5rem;
max-width:85rem;
justify-content: space-between;
margin: 0 auto;`

export const VideoContainer = styled.video`
position: absolute;
top: 0;
right: 0;
display: flex;
width: 100%;

border-left: 1px solid rgb(0, 0, 0);
margin-bottom: 5rem;
border-bottom: 1px solid grey;
z-index:-100;
filter: brightness(50%)`