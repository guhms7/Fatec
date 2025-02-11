class Aleatorio{
    get():number{
        return Math.floor(Math.random()*100+1);
    }
}

const fiveNumbers = new Aleatorio();
var n = 5;
for(let i=0; n>i; i++){
    console.log(fiveNumbers.get())
};
