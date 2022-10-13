let student = prompt("Qual nome do(a) aluno(a)?")

let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")


/* fazer a média:
n1 + n2 + n3 / 3 */

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result){
    alert( "Parabéns," + student + "! Você foi aprovado(a) no concurso sua média é:" + average)
}

else 
{ alert("Não foi dessa vez " + student +  "! Sua média foi de: " + average)
}
