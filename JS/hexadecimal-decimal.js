const valueHexa = "10"

function parserHexa(value) {
  switch (value) {
    case 'A':
      return 10
    case 'B':
      return 11
    case 'C':
      return 12
    case 'D':
      return 13
    case 'E':
      return 14
    case 'F':
      return 15    
    default:
      return value
  }
}

function convertBinareToDecimal(valueHexa) {
  const values = valueHexa.split("").reverse()

  let size = 0
  let result = 0

  values.map(value => {
    value = parserHexa(value)
    result += Math.pow(16, size) * Number(value)
    size += 1
  })

  return result
}

valueCovertionDecimal = convertBinareToDecimal(valueHexa)

console.log(`(HexaDecimal) ${valueHexa} =  ${valueCovertionDecimal} (Decimal) `)