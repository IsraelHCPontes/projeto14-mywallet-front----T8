import GlobalStyle from "../Assets/styles/GlobalStyles"
import SignInPage from "./SignInPage"
import SignUpPage from "./SignUpPage"
import WalletPage from "./WalletPage"
import { BrowserRouter ,Routes ,Route ,useNavigate  } from "react-router-dom"
import PrivatePage from "./PrivatePage"
import UserProvider from "../contexts/UserContext"


export default function App(){
  
    return (
        <BrowserRouter>
          <GlobalStyle/>
            <UserProvider>
              <Routes>
                <Route path="/sign-in" element={<SignInPage/>}/>
                <Route path="/sign-up" element={<SignUpPage/>}/> 
                <Route path="/wallet" element={ <WalletPage/>}/> 
                {/* <Route path="/novaentrada" element={ <NovaEntrada/>}/>  */}
                {/* <Route path="/hoje" element={<PrivatePage><Hoje/></PrivatePage>}/>
                <Route path="/historico" element={<PrivatePage><Historico/></PrivatePage>}/> */}
              </Routes>
           </UserProvider>
        </BrowserRouter>
    )
}