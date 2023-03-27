// reduce = reduzir
// reduz o array a um numero

// criando reduce


Array.prototype.MeuReduce = function(fn, ini) {
    let acc = ini
    for(i = 0; i < this.length; i++) {
            if(!acc && i === 0) {
                acc = this[i]
                continue
            }
            acc = fn(acc, this[i], i, this)
    }
    return acc
}

