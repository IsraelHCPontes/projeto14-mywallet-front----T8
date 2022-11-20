import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components"
import {getTransactions} from '../services/MyWallet';
import {userContext} from '../contexts/UserContext';


export default function Wallet(){
    const [transactions, setTransactions] = useState([]);
    const [saldo, setSaldo] = useState(0)
    const {userName, setUsername} = useContext(userContext)
    console.log('to no comeco',userName)

    useEffect( () => {
        async function fetchData(){
            try{
                const res = await getTransactions();
                setTransactions(res.data)
                setUsername(res.data[0].name)
                setSaldo(res.data[res.data.length-1].saldo)
                console.log('to dentro', res.data);
            }catch(error){
                console.log(error.data)
            }
        }
        fetchData();
    },[])
    
    

    console.log('to fora', transactions);

    function TransactionsList(){
     return  transactions.map(transaction => {
            return(
                <>
                    <Transactions>
                            <TransactionLeft>
                                <Date>{transaction.date}</Date>
                                <Title>{transaction.title}</Title>
                            </TransactionLeft>
                                <TransactionRigth>
                                <Value type={transaction.type} >{transaction.valor}</Value>
                            </TransactionRigth>
                    </Transactions>
                    <Balance>
                        <BalanceLeft>SALDO</BalanceLeft>
                        <BalanceRigth cor={saldo}>{saldo}</BalanceRigth>
                    </Balance>
                </>
            )
        })
    }

    const teste = true;
    return(
        <Wrapper>
            <Top>
                <h2>Olá, {userName}</h2>
                <ion-icon name="log-out-outline"></ion-icon>
            </Top>
            <ContainerTransaction>
                <TransactionScreen>
                       {transactions.length === 0?<Texto><h3>Não há registros de entrada ou saídas</h3> </Texto>: <TransactionsList/> }
                </TransactionScreen>
            </ContainerTransaction>
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
        width:32px;
        height:31px;
        color: #ffffff;
    }
`

const ContainerTransaction = styled.div`
        height: 446px;
        width: 326px;
        border-radius: 5px;
        margin-top:22px;
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items:center;
        position:relative;

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

const TransactionScreen = styled.div`
    width: 310px;
    height: 415px;
`
const Texto = styled.div`
     height: 446px;
     width: 326px;
     top:0px;
     left:0px;
     display:flex;
     justify-content: center;
     align-items: center;
     position:absolute;
     z-index: 1;

`

const Transactions = styled.div`
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
`

const TransactionLeft = styled.div`
     display: flex;
`
const TransactionRigth = styled.div`
   
`

const Date = styled.div`
    font-family: Raleway;
    font-size: 17px;
    font-weight: 400;
    color: #C6C6C6;
`
const Title =styled.div`
    margin-left: 10px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
`

const Value =styled.div`
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    color:${props => props.type === "-"?  '#C70000':'#03AC00'};
`

const Balance = styled.div`
    width: 310px;
    display:flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
`

const BalanceRigth = styled.div`
    font-family: Raleway;
    font-size: 17px;
    font-weight: 400;
    color:${({cor}) => cor > 0?'#03AC00' : '#C70000'}
`

const BalanceLeft = styled.div`
    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
    text-align: left;

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

