/*
 numero, fatorial, contator: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     escreva ("Digite o número para calcular o fatorial:")
     leia (numero)
     fatorial := 1
     para contator de 1 ate numero faca
          fatorial := fatorial * contator
     fimpara
     escreva ("O fatorial de", numero, " é:", fatorial)
*/

function acaoBotao(){
    var numero, fatorial
    numero = prompt("Digite o número para calcular o fatorial:")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++){
            fatorial = fatorial * contador 
     }
    
    
    
    document.getElementById("Paragrafo").innerText = "O fatorial de" + numero + " é:" + fatorial
}


