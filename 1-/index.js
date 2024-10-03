const { stdin, stdout } = require('process');
const readline= require('readline');
const rl=readline.createInterface({
    input:stdin,
    output:stdout
})
const belongsToFibonacci=(n)=>{
    let a=0
    let b=1
    if(n===0||n===1){
        return `${n} pertence a sequência Fibonacci`
    }
    while(b<n){
        let temp=b
        b=a+b
        a=temp
    }
    if(b===n){
        return `${n} pertence a sequência Fibonacci` 
    }else{
        return  `${n} não pertence a sequência Fibonacci`
    }
}
const keyNumber=()=>{
    rl.question(`Digite um numero ou ("sair" pra encerrar):`, input=>{
        if(input.toLowerCase()==='sair'){
            console.log('Encerrando')
            rl.close()
            return
        }
        const number=parseInt(input)
        if(isNaN(number)){
            console.log('Por favor, fornece um número válido.')
        }else{
            console.log(belongsToFibonacci(number))
        }
        keyNumber()
    })

}
keyNumber()