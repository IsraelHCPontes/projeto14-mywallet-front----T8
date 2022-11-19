
import styled from "styled-components"
 


export default function Wallet(){
    return(
        <Wrapper>
            <Top>
                <h2>Olá, Fulano</h2>
                <ion-icon name="log-out-outline"></ion-icon>
            </Top>
            <TransactionScreen>
                <h3>Não há registros de entrada ou saída</h3>
            </TransactionScreen>
            <BarBotom>
                <ButtonLeft>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <h3>Nova entrada</h3>
                </ButtonLeft>
                <ButtonRigh>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <h3>Nova saída</h3>
                </ButtonRigh>
            </BarBotom>
        </Wrapper> 
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Top = styled.div`
    margin-top:25px;
    width: 327px;
    display:flex;
    justify-content: space-between;

    h2{
        font-family: Raleway;
        font-size: 26px;
        font-weight: 700;
        color: #ffffff;

    }

    ion-icon{
        width:27px;
        height:26px;
        color: #ffffff;
    }


`

const TransactionScreen = styled.div`

        height: 446px;
        width: 326px;
        border-radius: 5px;
        margin-top:22px;
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items:center;


    h3{
        width:180px;
        height:46px;
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: center;
        color: #868686;

    }
`

const BarBotom = styled.div`
    width:343px;
    display: flex;
    justify-content: space-around;
`


const ButtonLeft = styled.button`
    margin-top:14px;
    height: 114px;
    width: 155px;
    border-radius: 5px;
    border: none;
    background: #A328D6;
    border-radius: 5px;
        
     h3{
        margin-top:30px;
        margin-left:3px;
        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        width:64px;
        text-align: left;
        color: #ffffff;
       }

     ion-icon{
        margin-right:120px;
        padding-bottom:3px;
        color: #ffffff;
        width: 22px;
        height: 22px;
     }  
`

const ButtonRigh = styled.button`
        margin-top:14px;
        height: 114px;
        width: 155px;
        border: none;
        background: #A328D6;
        border-radius: 5px;

        h3{
        margin-top:30px;
        margin-left:3px;
        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        width:64px;
        text-align: left;
        color: #ffffff;
       }

     ion-icon{
        margin-right:120px;
        padding-bottom:3px;
        color: #ffffff;
        width: 22px;
        height: 22px;
     }  
`

