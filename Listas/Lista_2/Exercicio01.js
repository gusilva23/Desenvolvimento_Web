var salarioAtualDaLarissa = 2000
var salarioAtualDaMaria = 5000
var salarioAtualDoJonas = 1000
var salarioAtualDoFrancisco = 3000
var reajuste = 10
var valorReajuste = salarioAtualDaLarissa * reajuste / 100
var salarioReajustado = salarioAtualDaLarissa + valorReajuste 

var valorReajuste2 = salarioAtualDaMaria * reajuste / 100
var salarioReajustado2 = salarioAtualDaMaria + valorReajuste2

var valorReajuste3 = salarioAtualDoJonas * reajuste / 100
var salarioReajustado3 = salarioAtualDoJonas + valorReajuste3

var valorReajuste4 = salarioAtualDoFrancisco * reajuste / 100
var salarioReajustado4 = salarioAtualDoFrancisco + valorReajuste4

console.log("Larissa ganha " + salarioAtualDaLarissa + " com reajuste de 10% passa a ganhar " + salarioReajustado)
console.log("Maria ganha "  + salarioAtualDaMaria + " com reajuste de 10% passa a ganhar " + salarioReajustado2)
console.log("Jonas ganha "  + salarioAtualDoJonas + " com reajuste de 10% passa a ganhar " + salarioReajustado3)
console.log("Francisco ganha "  + salarioAtualDoFrancisco + " com reajuste de 10% passa a ganhar " + salarioReajustado4)

