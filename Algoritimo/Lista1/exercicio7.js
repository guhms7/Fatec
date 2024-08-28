let i =0;
while(i<6){
    nro = Math.random()*100;
    result = Math.floor(nro)
    if(result%3 == 0 ||result%5==0 ){
        console.log(result);
        i+=1; 
    }
    
}