/*
fazer um codigo q calcule quantas vezes vc deve comer entre horas determinada horas(hora minima e maxima)

*/

/* 
acordo 6h
pRefeição 6:30h
-2h-
cafe da manha 8:30h
-2h-
lanche manha 10h
-2h-
almoço 12h
-2h-
lanche tarde1 14h
-2h-
lanche tarde2 16h
-2:30h-
lanche inicio noite 18:30
-1h-
pre-treino: 19:30h
-1h-
treino 20:25h 
--
pos treino 21:40h
-50min-
janta 22:30
--
mimir 23h

descanso = ?
*/

function horaSono(hAcordar, hDormir) {
    return (hDormir - hAcordar) - 10
}

console.log(`Horas Dormidas: ${horaSono(6, 23)} horas`)



