/*
valor01, valor02, resultado: real
    operacao: caractere


escreval("Digite o primeiro valor:")
        leia(valor01)

    escreval("Escolha a operação: Ex:+, -, *, / ")
        leia(operacao)

    escreval("Digite o segundo valor: ")
        leia(valor02)
    
     se operacao = "+" entao
        resultado := valor01 + valor02
     senao
       se operacao = "-" entao
        resultado := valor01 - valor02
       senao
           se operacao = "*" entao
        resultado := valor01 * valor02
          senao
            se operacao = "/" entao
              resultado := valor01 / valor02
             fimse
          fimse
       fimse
    fimse
    
    escreva("Resultado do calculo é:", resultado)
*/




function acaoBotao(){
    var valor01, valor02, resultado, operacao;
    valor01 = prompt ("Digite o primeiro valor:")
    operacao = prompt ("Digite a operação: ex: +, -, *, / ")
    valor02 = prompt ("Digite o segundo valor:")
    
    
        
         if(operacao == "+"){
            resultado = parseInt(valor01) + parseInt(valor02)
         }
         else if(operacao == "-"){
            resultado = parseInt(valor01) - parseInt(valor02)
         }
         else if(operacao == "*"){
            resultado = parseInt(valor01) * parseInt(valor02)
         }
         else if(operacao == "/"){
            resultado = parseInt(valor01) / parseInt(valor02)
         }
    document.getElementById("Paragrafo").innerText = resultado
}


    
     
