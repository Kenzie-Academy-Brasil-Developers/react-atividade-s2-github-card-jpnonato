import styled from "styled-components"


export  const Container = styled.div`

   display: flex;
   border: yellow solid;

    width: 70%;
    margin-top: 10px;
    border-radius: 45px;
    border-bottom-right-radius: 7px;
    border-top-right-radius: 7px;
    background-color: #1d5cda;
    font-size: 9px;
    max-height: 85px;
    max-width: 300px;

   img{
        width: 28%;
        max-width: 63px;
        height: 60px;
        border-radius: 100%;
    }
   
   section{
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       width: 50%;
       text-align: initial;
   }

   h2{
       margin: 0;
       width: 90%;
   }

   h4{
        margin: 0 0 0 16px;
        width: 106%;
    }

  


   @media screen and (min-width: 768px) {

        width: 62%;
        max-width: 480px;
        font-size: 16px;
        border-radius: 53px;
        max-height: 100px;
        border-bottom-right-radius: 7px;
        border-top-right-radius: 7px;

        img {
            height: 100px;
            width: 100px;
            max-width: 100px;
        }

        h4 {
            margin: 0;

            width: 90%;
        }

        input{
            width: 275px;
            font-size: 18px;
            border-radius: 3px;
            border: none;
        }
    }

`