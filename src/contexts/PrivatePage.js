import { useNavigate} from 'react-router-dom';

export default function PrivatePage({children}){
   
    const auth = JSON.parse(localStorage.getItem('myWallet'))
    console.log(auth.token)
     if(auth){
       return <>{children}</>
     }  
     Redireciona();
}

function Redireciona(){
    const navigate = useNavigate();
    navigate('/sign-in')
}