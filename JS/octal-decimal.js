const valueOctal = "12"

function convertBinareToDecimal(valueOctal) {
  const values = valueOctal.split("").reverse()

  let size = 0
  let result = 0

  values.map(value => {
    result += Math.pow(8, size) * Number(value)
    size += 1
  })

  return result
}

valueCovertionDecimal = convertBinareToDecimal(valueOctal)

console.log(`(Otactal) ${valueOctal} =  ${valueCovertionDecimal} (Decimal) `)