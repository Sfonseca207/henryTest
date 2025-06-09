function laCajaDePandora(num){
 
  if(num % 2 == 0){
    

    return num.toString(2);

  }else{

  
    return num.toString(16).toUpperCase();

  }

  
  
}

console.log(laCajaDePandora(10)); 
console.log(laCajaDePandora(15)); 