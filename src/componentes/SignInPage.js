import { Link, useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useContext,useState } from "react"
import {TokenContext} from '../contexts/UserContext';
import { Button } from "./common/Button";
import Form from "./common/Form";
import { postSignIn } from "../services/MyWallet"


export default function SignInPage(){
    const [disabled, setDesibled] = useState(false)
    const navigate = useNavigate()
    const { signIn } = useParams()
    const {token, setToken} =  useContext(TokenContext)
   

    const [form, setForm] = useState({
        email:'',
        password:''
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
            ...form
        }
        
        setDesibled(true)

        try{
            const response = await postSignIn(body);

            console.log(response.data.token);

            setForm({ 
            email: '',
            password:''})

            setToken(response.data.token)  

            navigate('/wallet'); 
        }catch({response}){
             alert(response.data.message);
             setDesibled(false)
        }
    }

    

  return (
    <Wrapper>
        <Logo>MyWallet</Logo>
        <Form onSubmit={sendForm}>
                <input
                id='forEmail'
                onChange={handleForm}
                type='email'
                name='email'
                value={form.email}
                placeholder='E-mail'
                disabled={disabled}
                required/>
                
                <input
                id='forSenha'
                onChange={handleForm}
                type='password'
                name='password'
                value={form.senha}
                placeholder='Senha'
                disabled={disabled}
                required/>

                <Button type='submit'> Entrar </Button>
         </Form>
         <Link to={`/sign-up`}>
         <RodaPe>Primeira vez? Cadastre-se!</RodaPe>
         </Link>
    </Wrapper>
  )}


const Wrapper = styled.div`
    margin-top: 259px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        font-family: 'Raleway', sans-serif;
    }
`

const Logo = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;

    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;

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

