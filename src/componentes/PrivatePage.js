

export default function PrivatePage({children}){
    
    const auth = JSON.parse(localStorage.getItem('useData'))

   return auth ? 
   <>
    {children}
   </> 
   :
   console.log('sem acesso')
   
    
} 