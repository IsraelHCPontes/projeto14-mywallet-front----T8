import GlobalStyle from "../Assets/styles/GlobalStyles"
import SignInPage from "./SignInPage"
import SignUpPage from "./SignUpPage"
import WalletPage from "./WalletPage"
import { BrowserRouter ,Routes ,Route ,useNavigate  } from "react-router-dom"
import UserProvider from "../contexts/UserContext"
import PrivatePage from "../contexts/PrivatePage"
import NewAddPage from "./NewAddPage"
import NewDebitPage from "./NewDebitPage"


export default function App(){

    return (
        <BrowserRouter>
          <GlobalStyle/>
            <UserProvider>
              <Routes>
                <Route path="/sign-in" element={<SignInPage/>}/>
                <Route path="/sign-up" element={<SignUpPage/>}/> 
                <Route path="/" element={<PrivatePage><WalletPage/></PrivatePage>}/> 
                <Route path="/newaddpage" element={<PrivatePage><NewAddPage/></PrivatePage>}/> 
                <Route path="/newdebitpage" element={<PrivatePage><NewDebitPage/></PrivatePage>}/> 
              </Routes>
           </UserProvider>
        </BrowserRouter>
    )
}