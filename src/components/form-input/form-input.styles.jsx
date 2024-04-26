import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
top: -20px;
font-size: 15px;
color: white;
`

export const FormInputLabel = styled.label`
color: ${subColor};
   
    font-weight: normal;
    position: absolute;
    pointer - events: none;
    left: 5px;
    top: -1px;
    transition: 300ms ease all;

    ${({ shrink }) => shrink && shrinkLabelStyles}
`

export const Input = styled.input`
background: none;
background-color: white;
color: ${subColor};
font-size: 15px;
padding: 10px 10px 10px 5px;
display: block;
width: 70%;
border: none;
border-radius: 0;
border: 1px solid ${subColor};
margin: 25px 0;

&:focus {
  outline: none;
}
&:focus ~ ${FormInputLabel} {
  ${shrinkLabelStyles};
}
`

export const Group = styled.div`
position: relative;
margin: 45px 0;
`


