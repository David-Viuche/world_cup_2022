const groups = {
  A: ['NED', 'ECU', 'SEN', 'QAT'],
  B: ['ENG', 'IRN', 'USA', 'WAL'],
  C: ['POL', 'ARG', 'KSA', 'MEX'],
  D: ['FRA', 'AUS', 'DEN', 'TUN'],
  E: ['ESP', 'JPN', 'CRC', 'GER'],
  F: ['CRO', 'MAR', 'BEL', 'CAN'],
  G: ['BRA', 'SUI', 'CMR', 'SRB'],
  H: ['POR', 'GHA', 'URU', 'KOR']
}

export const getGroupByAbrev = (abr) => {
  const arr = Object.entries(groups)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1].includes(abr)) {
      return arr[i][0]
    }
  }

  return null
}
