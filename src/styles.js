import styled from "styled-components"

import { FcHighPriority, FcApproval } from "react-icons/fc";

export const Conteiner = styled.div`

background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`

export const TodoList = styled.div`

    background:#E0FFFF ;
    width: 400px;
    padding: 30px;
    border-radius: 5px;
    

    ul{
        padding: 0;
        margin-top: 30px;
    }

    h3{
        text-align: center;
        font-size: 30px;
        margin-top: 20px ;
    }

    @media all and (max-width:500px){
        width: 290px;
    } 
    

`

export const Input = styled.input`

    border: 2px solid #DCDCDC;
    border-radius: 5px;
    padding: 12px;
    outline: none;
    width: 60%;
    
    @media all and (max-width:500px){
        width: 150px;
    } 

`

export const Button = styled.button`

       
    background: #051937;
    color: #fff;
    padding: 8px;
    border-radius: 5px;
    border: none;
    float: right;
    font-size: 20px;
    width: 110px;
    transition: 0.3s;
    cursor: pointer;
    

    :hover{
        background: #a8eb12;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    :active{
        opacity: 0.6;
    }


    @media all and (max-width:500px){
        width: 100px;
        margin-left: 12px;
        
    } 
    


`

export const ListItem = styled.div`

    background: ${props => props.isFiniched ? "#B7E5B0" : "#fff"};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    border-radius: 5px;
    height: 60px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:20px;
    padding:0 20px;
    

    li{
        list-style: none;
        font-size:20px ;
        color:#051937;
    } 


`

 export const Trash = styled(FcApproval)`
 
 cursor: pointer;
 `

export const Check = styled(FcHighPriority)`
 
cursor: pointer;
`