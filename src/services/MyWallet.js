import axios from 'axios';

const BASE_URL = 'http://localhost:5001';


function postSignIn(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`,body);
    return promise;
  }
  
  function postSignUp(body){
      const promise = axios.post(`${BASE_URL}/sign-up`, body)
      return promise;
  }



// function getBuscaHabitosHoje() {
//     const auth = JSON.parse(localStorage.getItem('useData'))
 
//     const config = {
//         headers: {
//             'Authorization': `Bearer ${auth.token}`
//         }
//     }
//     const promise = axios.get(`${BASE_URL}/habits/today`,config);
//     return promise;
// }  






// function postCriarHabitos(body) {
//     const auth = JSON.parse(localStorage.getItem('useData'))

//     const config = {
//         headers: {
//             'Authorization': `Bearer ${auth.token}`
//         }
//     }
//     const promise = axios.post(`${BASE_URL}/habits`,body, config);
//     return promise;
// }


// function postCheckHabitos({id, body}) {
//     const auth = JSON.parse(localStorage.getItem('useData'))

//     const config = {
//         headers: {
//             'Authorization': `Bearer ${auth.token}`
//         }
//     }
//     console.log('CHECK')
//     const promise = axios.post(`${BASE_URL}habits/${id}/check`,body,config);
//     return promise;
// }
 

// function postUncheckHabitos({id, body}) {
//     const auth = JSON.parse(localStorage.getItem('useData'))

//     const config = {
//         headers: {
//             'Authorization': `Bearer ${auth.token}`
//         }
//     }
//     console.log('UNCHEK')
//     const promise = axios.post(`${BASE_URL}habits/${id}/uncheck`,body,config);
//     return promise;
// } 


export {
    postSignIn,
    postSignUp,
 };