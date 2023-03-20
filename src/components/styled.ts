import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin : 0px;
    box-sizing: content-box;
}
body{
    background: linear-gradient(133deg, rgba(152,5,5,1) 0%, rgba(60,180,67,1) 45%, rgba(29,42,138,1) 95%);
   
    font-family: 'Roboto';
    color: #0077b5;
}
`


export const Formulario = styled.form`
margin-top: 50px;
overflow: hidden;
width: 650px;
height: 300px;
border-radius: 5px;
background: linear-gradient(133deg, rgb(255 255 255) 0%, rgb(225 225 225) 0%, rgb(216 216 216) 87%);
    border: 1px solid #0077b5;
    box-shadow: 0px 0px 10px #111111;

h3{
    text-align: center;
    padding: 8px;

background: linear-gradient(133deg, rgba(2,0,36,1) 0%, rgba(16,75,125,1) 0%, rgba(0,119,181,1) 87%);
    color:#FFFFFF;
    border-bottom: 1px solid blue;
    font-weight: 400;
}
    `
export const Interface = styled.div`

    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-direction: column;

`
export const Btn = styled.button`
padding: 6px;
    width: 200px;
    border-radius: 7px;
    border: 1px solid #0077b5;
    color:#0077b5;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px #b7acac;
&:active{

background: linear-gradient(133deg, rgba(2,0,36,1) 0%, rgba(16,75,125,1) 0%, rgba(0,119,181,1) 87%);
    color:#FFFFFF;
}
`
export const ContainerForm = styled.div`
display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    height: 80%;
    justify-content: space-around;
    margin:auto;
`

export const Selectores = styled.div`
width:100%;

section {
 display: flex;
 padding: 11px;
    width: 94%;
    justify-content: space-around;
}
 label{
 
 }
 select{
    border: 1px solid blue;
    border-radius: 8px;
    padding: 5px;
    width: 300px;
    outline: none;
    color: blue;
    text-align: center;
    box-shadow: 0px 0px 5px #b7acac;
 }
`
export const Check = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-around;

input[type="radio"]{
display:none;
}
label{
    border-radius: 8px;
    border: 1px solid #0077b5;
    display: flex;
    padding: 5px 25px;
    flex-direction: row-reverse;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px #b7acac;
}

label:after{
    content: "";
    border: 1px solid #0077b5;
    border-radius: 50%;
    width: 10px;
    margin: auto;
    height: 10px;
    margin-right: 10px;
  
}
input[type="radio"]:checked + label{

background: linear-gradient(133deg, rgba(2,0,36,1) 0%, rgba(16,75,125,1) 0%, rgba(0,119,181,1) 87%);
color:#FFFFFF;
}
input[type="radio"]:checked + label:after{
    content: "";
    border: 5px solid #FFFFFF;
    border-radius: 50%;
    width: 5px;
    margin: auto;
    height: 5px;
    margin-right: 10px;
}
`

export const Tipo = styled.div`
width:100%;

h4{
    margin-bottom:13px;
     text-align: center;
}
`


export const VentanaModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #00000069;
    top: 0px;
    left: 0px;
    display: flex;
    position: absolute;
    justify-content: center;

    section {
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #0077b5;
        p{
            padding: 5px;
        }
        h4{
            padding: 7px;
        }
    }
div {
    position: absolute;
top:80px;
overflow: hidden;
width: 450px;
height: 200px;
border-radius: 5px;
background: linear-gradient(133deg, rgb(255 255 255) 0%, rgb(225 225 225) 0%, rgb(216 216 216) 87%);
    border: 1px solid #0077b5;
    box-shadow: 0px 0px 10px #111111;

h3{
    text-align: center;
    padding: 8px;
    background: linear-gradient(133deg, rgba(2,0,36,1) 0%, rgba(16,75,125,1) 0%, rgba(0,119,181,1) 87%);
    color: #FFFFFF;

    font-weight: 400;
}}
`

export const Contenido = styled.section`
color: #111111;

`

export const BtnCerrar = styled.button`
padding: 6px;
    width: 200px;
    border-radius: 7px;
    border: 1px solid #0077b5;
    color:#0077b5;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px #b7acac;
&:active{

background: linear-gradient(133deg, rgba(2,0,36,1) 0%, rgba(16,75,125,1) 0%, rgba(0,119,181,1) 87%);
    color:#FFFFFF;
}
`

export const Error = styled.div`
    background-color: #cf3d3d;
    color: #FFFFFF;
    padding: 10px;
    width: 630px;
    margin: 20px;
    text-align: center;
    border-radius: 5px;
`

export const Spiner = styled.section`

display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  transform: translateZ(1px);
section {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: linear-gradient(133deg, rgba(2,0,36,1) 0%, rgba(16,75,125,1) 0%, rgba(0,119,181,1) 87%);
  animation: lds-circle 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(360deg);
  }
}
`