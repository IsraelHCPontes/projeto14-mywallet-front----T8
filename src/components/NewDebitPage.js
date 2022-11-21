import styled from "styled-components";
import { Button } from "./common/Button";
import Form from "./common/Form";
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import {postNewAdd} from "../services/MyWallet"


export default function NewDebitPage(){

   const [loading, setLoading] = useState(false)
    const [disabled, setDesibled] = useState(false)

    const navigate = useNavigate()

    const [form, setForm] = useState({
        valor: '',
        title: '',
    })

    function handleForm(e){
        e.preventDefault()
        console.log(e.target.name, e.target.value )
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function sendForm(e) {

        e.preventDefault()

        const body ={
            ...form,
            type: "-"
        }

        setLoading(true)
        setDesibled(true)

        try{
            const response = await postNewAdd(body)
            console.log('deu bom', response);
            navigate('/');
             setForm({ 
                title: '',
                valor: ''
               })
        }catch({response}){
            alert(response.data.message);
            setLoading(false);
            setDesibled(false)
        }
    }


   return( 
         <Wrapper>
             <LogoTop>
                 Nova saída
             </LogoTop>
              <Form onSubmit={sendForm}>
                
              <input
                 id='forName'
                 onChange={handleForm}
                 type='number'
                 name='valor'
                 value={form.name}
                 placeholder='Valor'
                 disabled={disabled}
                 required/>
                
                 <input
                 id='forEmail'
                 onChange={handleForm}
                 type='text'
                 name='title'
                 value={form.title}
                 placeholder='Descrição'
                 disabled={disabled}
                 required/>
         
 
                <Button type='submit'>Salvar entrada</Button>
 
              </Form>
         </Wrapper>
     )
 }
 
 const Wrapper = styled.div`
     margin-top: 80px;
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
 
     input{
         font-family: 'Raleway', sans-serif;
     }
  `
 
 const LogoTop = styled.div`
      margin-right: 190px;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      color: #FFFFFF;
 `
 
 const RodaPe = styled.h3`
    font-family: 'Raleway', sans-serif;
     font-size: 15px;
     font-weight: 700;
     line-height: 18px;
     letter-spacing: 0em;
     text-align: left;
     margin-top:36px;
     color: #ffffff;
 `
