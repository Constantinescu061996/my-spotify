function TokenValid(){
    const token = localStorage.getItem('token');
    if(!token){
        return false;
    }
    // Verificam si daca nu este expirat
    
    // transformam string in object
    const parsedToken = JSON.parse(token);
    
    // timpul maxim admis
    const expirationTime = parsedToken.expiration;
    
    
    // Timpul in milisecunde cel curent
    const currentTime =new Date().getTime();
    
    
    
    if(currentTime < expirationTime){
        return false;
    }
    
    return true;
} 
