import { getFlag } from './getFlags'
import { getNameTeam } from './getNameTeam'

export const getGroups = async (code) => {
  const url = 'https://copa22.medeiro.tech/groups'

  const resp = await fetch(url)

  const data = await resp.json()

  let groups = data.map(element => ({
    id: element.id,
    code: element.code,
    equipos: element.teams.map(team => ({

      id: team.id,
      abrev: team.country,
      nombre: getNameTeam(team.alternateName),
      posicion: team.position,
      bandera: getFlag(team.country),
      victorias: team.wins,
      puntos: team.points,
      empates: team.draws,
      derrotas: team.losses,
      golesAnotados: team.goalsScored,
      golesEnContra: team.goalsConceded,
      golesDiferencia: team.goalsDifference

    }))
  }))

  if (code) {
    groups = groups.filter(group => (group.code === code))
  }

  return groups
}
