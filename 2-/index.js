const readline=require('readline')
const { stdin, stdout } = require('process');
const rl=readline.createInterface({
    input:stdin,
    output:stdout
})
const countLetterA=(text)=>{
    const matches=text.match(/a/gi)
    const count=matches?matches.length:0
    let upperCount=0
    let lowerCount=0;

for(const letter of text){
    if(letter==='a'){
        lowerCount++
    }else if (letter ==='A'){
        upperCount++
    }
}
console.log(`Total de 'a':${count}`);
console.log(`Total de 'a' minúsculas: ${lowerCount}`);
console.log(`Total de 'a' maiúsculas: ${upperCount}`);
   
};
const text= ()=>{
    rl.question('Insira um texto para análise (ou "sair" para finalizar):',(input)=>{
        if(input.toLowerCase()==='sair'){
            console.log('Finalizando...');
            rl.close();
            return;
        }
        if(input.trim() !==''){
countLetterA(input)
        }else{
            console.log("Por favor fornece um texto válido.")
        }
        text()
    })
}
        text()