/*
Var
// Seção de Declarações das variáveis 
      nome:caractere
      numero:real
      

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
        escreval("Informe seu nome: ")
        leia(nome)
        escreval("Digite um numero: ")
        leia(numero)
                    escreval(nome, " : ", numero)
*/

var nome, numero;

nome = prompt("Digite o seu nome:")

numero = prompt("Digite um numero")

document.getElementById("Paragrafo").innerText = nome + " : " + numero