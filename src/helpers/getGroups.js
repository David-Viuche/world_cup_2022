import { getFlag } from './getFlags'

export const getGroups = async () => {
  const url = 'https://copa22.medeiro.tech/groups'

  const resp = await fetch(url)

  const data = await resp.json()

  const groups = data.map(element => ({
    id: element.id,
    code: element.code,
    equipos: element.teams.map(team => ({

      id: team.id,
      abrev: team.country,
      nombre: team.alternateName,
      posicion: team.position,
      bandera: getFlag(team.country)

    }))
  }))

  return groups
}
