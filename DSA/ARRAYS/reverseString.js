
function reverse(string){
    if(!string || string.length < 2 || typeof string !== 'string'){
        return string
    }
    let reversedString = ''
    for(let i = string.length - 1; i >=0; i--){
        reversedString += string[i]
    }
    console.log(reversedString)
}

const reverse2 = string => string.split('').reverse().join('')

console.log(reverse2('abcdef'))