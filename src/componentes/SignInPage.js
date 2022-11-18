import { Link, useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useContext,useState } from "react"
import {UserContext} from '../contexts/UserContext';
import { Button } from "./common/Button";
import Form from "./common/Form";
import { postSignIn } from "../services/MyWallet"


export default function SignInPage(){
    const [disabled, setDesibled] = useState(false)
    const navigate = useNavigate()
    const { signIn } = useParams()

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    function sendForm(e) {
        e.preventDefault()
        const body ={
            ...form
        }
        
       
        setDesibled(true)

        postSignIn(body).then(res => 
        {console.log('deu bom', res);
        setForm({ 
        email: '',
        password:''})
        
        const stringImg = JSON.stringify(res.data.image)  
        localStorage.setItem('useImg', stringImg)
        
        
        
        const stringData = JSON.stringify(res.data)  
        localStorage.setItem('useData', stringData) 
        navigate('/hoje'); 
    })

        postSignIn(body).catch(({response}) => 
        {alert(response.data.message);
         setDesibled(false)})
    }


    function handleForm(e){
        console.log(e.target.name, e.target.value )
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
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
         <Link to={`/cadastro`}>
         <RodaPe>Primeira vez? Cadastre-se!</RodaPe>
         </Link>
    </Wrapper>
  

  )  
}

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

