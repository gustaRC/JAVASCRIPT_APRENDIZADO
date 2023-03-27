const numbers = [1, 2, 3, 4, 5, 6]

const soma = (total, elemento) => total + elemento
const total = numbers.reduce(soma) //21
const total2 = numbers.reduce(soma, 100) //121
console.log(total2)


//erro
const avg = (acc, el, i, array) => {
    if(i === array.lenght - 1) {
        return (acc + el) / array.lenght
    } else {
        return acc + el
    }
}

const uoow = numbers.reduce(avg)
console.log(numbers.reduce(avg))
