import styled from 'styled-components'
import Background from '../../assets/bg.png'


export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
height: 120vh;
  
`;

export const Imagem = styled.img`
margin-top: 30px;
`;


export const InputLabel = styled.p`
letter-spacing: -0.408px;
color: #EEEEEE;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
margin-left:25px;

`;

export const Input = styled.input`
color: #FFFFFF;
width: 342px;
height: 58px;
left: 36px;
top: 193px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
padding-left: 25px;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
margin-bottom:25px;
border: none;
outline: none;

`;



export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
list-style:none;
margin-top: 20px;

p{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
}
button{
    background: none;
    border:none;
     cursor: pointer;
}
`


export const Usser = styled.li`
display: flex;
justify-content: space-around;
align-items: center;


background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
list-style:none;
margin-top: 20px;

p{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
}
button{
   
    background: none;
    border:none;
     cursor: pointer;
}
`






