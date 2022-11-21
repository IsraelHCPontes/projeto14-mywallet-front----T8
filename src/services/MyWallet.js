import axios from 'axios';

const BASE_URL = 'https://mywallet-1tvr.onrender.com'

function creatHeaders(){
  const auth = JSON.parse(localStorage.getItem("myWallet"));
  console.log('ciracao', auth.token)
  const config ={
    headers:{
      Authorization:`Bearer ${auth.token}`
    }
  }
  return config
};


function postSignIn(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`,body);
    return promise;
  }
  
  function postSignUp(body){
      const promise = axios.post(`${BASE_URL}/sign-up`, body)
      return promise;
  }

 function getTransactions(body) {
     const config = creatHeaders();
     const promise = axios.get(`${BASE_URL}/transactions`,config);
     return promise;
 }  

 function postNewAdd(body) {
  const config = creatHeaders();
  const promise = axios.post(`${BASE_URL}/transactions`,body,config);
  return promise;
} 

export {
    postSignIn,
    postSignUp,
    getTransactions,
    postNewAdd
 };