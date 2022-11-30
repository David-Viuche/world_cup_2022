import { getFlag } from './getFlags'
import { getNameTeam } from './getNameTeam'

export const getMatches = async (abrev) => {
  let url = `https://copa22.medeiro.tech/teams/${abrev}/matches`

  if (!abrev) {
    url = 'https://copa22.medeiro.tech/matches/today'
  }

  const resp = await fetch(url)

  const data = await resp.json()

  const matches = data.map(element => ({
    id: element.id,
    localizacion: element.location,
    estado: element.status,
    fase: (element.stageName === 'First stage') && 'Fase de grupos',
    equipoLocal: {
      abrev: element.homeTeam.country,
      goles: element.homeTeam.goals,
      nombre: getNameTeam(element.homeTeam.name),
      penaltis: element.homeTeam.penalties,
      bandera: getFlag(element.homeTeam.country)
    },
    equipoVisitante: {
      abrev: element.awayTeam.country,
      goles: element.awayTeam.goals,
      nombre: getNameTeam(element.awayTeam.name),
      penaltis: element.awayTeam.penalties,
      bandera: getFlag(element.awayTeam.country)
    },
    fecha: element.date,
    ganador: element.winner
  }))

  return matches
}
