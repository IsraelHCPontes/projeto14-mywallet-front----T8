import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
export default function PrivatePage({children}){
    const navigate = useNavigate();
   
    const auth = JSON.parse(localStorage.getItem('myWallet'))
    console.log(auth)
     if(auth){
       return <>{children}</>
     }  
     Redireciona(navigate);
}

function Redireciona(navigate){
   useEffect(()=>  navigate('/sign-in'), [])
   
}