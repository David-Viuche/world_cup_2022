export const getFase = (fase) => {
  const fases = {
    grupos: 'Fase de grupos',
    octavos: 'Octavos de final',
    cuartos: 'Cuartos de final',
    semi: 'Semi-final',
    tercer: 'Tercer lugar',
    final: 'Final'
  }
  return fases[fase]
}
