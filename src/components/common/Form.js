import styled from "styled-components";

const Form = styled.form`

        margin-top: 42px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        label {
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
        }

        input{
            height: 58px;
            width: 326px;
            left: 25px;
            top: 233px;
            border-radius: 5px;

            margin-bottom: 6px;
            
           
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-family: Lexend Deca;
            font-size: 20px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
            padding-left: 11px;
            text-align: left;
            
         
        }

        input::placeholder{
            
            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;

        }

`

export default Form;