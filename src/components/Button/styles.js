import styled from "styled-components";


export const Button = styled.button`
margin-top: 70px;
width: 342px;
height: 74px;
background:  ${props => props.isback ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
border-radius: 14px;

border:  ${props => props.isback ? '1px solid #fff' : 'none'};
outline: none;
color:#fff;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 28px;


cursor: pointer;

display: flex;
    align-items: center;
   justify-content: center;
    gap: 20px;


    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }

    img { 
        transform: ${props => props.isback && ' rotateY(180deg)' };

    }
`;