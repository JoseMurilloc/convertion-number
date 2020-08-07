  const valueBinario = "011"

  function convertBinareToDecimal(valueBinario) {
    const values = valueBinario.split("").reverse()

    let size = 0
    let result = 0

    values.map(value => {
      result += Math.pow(2, size) * Number(value)
      size += 1
    })

    return result
  }

  valueCovertionDecimal = convertBinareToDecimal(valueBinario)

  console.log(`(Binario) ${valueBinario} =  ${valueCovertionDecimal} (Decimal) `)