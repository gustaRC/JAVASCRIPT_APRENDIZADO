function range(a, b, s = 1){
    const n1 = b === undefined ? 1 : a // = valor A
    const n2 = b === undefined ? a : b // = valor B
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s) /* sempre retorna valor positivo
                                                          necessario para decrementar 
    SE valor1 for menor q valor 2 retornara um valor positivo de s
    SE NN retornara um valor negativo resultando na decrementação do i
    */
    const nums = []

    for(let i = n1; n1<= n2 ? i <= n2 : i >= n2; i = i + step) {
/* variavel i recebe n1; se n1 é menor q n2 logo i menor q n2 se nn i é maior q n2; 
i incrementado ou decrementado pela variavel step */
        nums.push(i)
    }

    return nums
}
console.log(range(8, -4, -4))

/*

n1:
SE b nn tiver falor definido = 1
SE NN segue normal a com a & b com b, 
cada um com seus respectivos valores

n2:
SE b nn tiver valor definido = valor de a
SE NN segue normal, b com b & a com a

*/