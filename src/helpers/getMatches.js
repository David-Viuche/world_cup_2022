import { getFlag } from './getFlags'
import { getNameTeam } from './getNameTeam'

const getFase = (fase) => {
  const fases = {
    'First stage': 'Fase de grupos',
    'Round of 16': 'Octavos de final',
    'Quarter-final': 'Cuartos de final',
    'Semi-final': 'Semi-final',
    'Play-off for third place': 'Tercer lugar',
    Final: 'Final'
  }
  return fases[fase]
}

export const getMatches = async (abrev) => {
  let url = `https://copa22.medeiro.tech/teams/${abrev}/matches`

  if (!abrev) {
    url = 'https://copa22.medeiro.tech/matches/today'
  }

  if (abrev === 'all') {
    url = 'https://copa22.medeiro.tech/matches'
  }

  const resp = await fetch(url)

  const data = await resp.json()

  const matches = data.map(element => ({
    id: element.id,
    localizacion: element.location,
    estado: element.status,
    fase: getFase(element.stageName),
    equipoLocal: {
      abrev: element.homeTeam.country,
      goles: element.homeTeam.goals,
      nombre: getNameTeam(element.homeTeam.name),
      penaltis: element.homeTeam.penalties,
      bandera: getFlag(element.homeTeam.country || 'TBD')
    },
    equipoVisitante: {
      abrev: element.awayTeam.country,
      goles: element.awayTeam.goals,
      nombre: getNameTeam(element.awayTeam.name),
      penaltis: element.awayTeam.penalties,
      bandera: getFlag(element.awayTeam.country || 'TBD')
    },
    fecha: element.date,
    ganador: element.winner
  }))

  return matches
}
