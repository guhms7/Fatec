let i =0;
while(i<6){
    nro = Math.random()*100;
    result = Math.floor(nro)
    if(result<20||result>80){
        console.log(result);
        i+=1;  
    }
}