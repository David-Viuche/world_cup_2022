import { useFetchGroups } from '../hooks/useFetchGroups'
import { TablePositions } from './TablePositions'

export const GroupTable = ({ groupCode }) => {
  const { groups, isLoading } = useFetchGroups(groupCode)

  return (
    <>
      {
        isLoading && <h2>Cargando...</h2>
      }

      {
        groups.map(group => <TablePositions key={group.id} {...group} />)
      }

    </>
  )
}
