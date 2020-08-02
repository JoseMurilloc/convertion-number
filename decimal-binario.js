
const valueDecimal = 231


/**
 * Retorna o valor em binario [Ainda não funciona]
 * @param {valueDecimal} valueDecimal Valor inteiro decimal
 */
function decimalToBinario(valueDecimal) {  
  let binario = ""

  if (valueDecimal === 1) {
    return 1
  } else {
    // Fazer algo aqui?
    binario = binario.concat(String(valueDecimal % 2))
    console.log(binario)
    return decimalToBinario(Math.trunc(valueDecimal / 2))
  }
}


function decimalToBinarioTest(valueDecimal) {  
  let rest = ""
  let result = ""

  while(valueDecimal >= 1) {
    
    rest += String(valueDecimal % 2)

    valueDecimal = Math.trunc(valueDecimal/2)
  }

  rest = rest.split("").reverse()

  rest.map(r => result += r)

  return result
}

console.log(decimalToBinarioTest(valueDecimal))