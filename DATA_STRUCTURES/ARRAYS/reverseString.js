
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




// set an empty string to be the new reversed string
// travese the input str from the last input and append each char to the new reversed string
// return the reversed string

function reverse(str) {
    // CHECK INPUT
    if(!str || str.length <2 || typeof str !== 'string'){
        return 'NOT A STRING';
    }
    const reversedString = [];
    for(let i = str.length -1; i >=0; i--) {
        reversedString.push(str[i]);
    }   
    // console.log(reversedString.join(''))
    return reversedString.join('');
}


console.log(reverse('hello'))