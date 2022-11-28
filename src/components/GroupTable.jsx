import { useFetchGroups } from '../hooks/useFetchGroups'
import { TablePositions } from './TablePositions'

export const GroupTable = ({ groupCode }) => {
  const { groups, isLoading } = useFetchGroups(groupCode)

  return (
    <>
      <a href='/world_cup_2022/' className='p-4 m-4 rounded bg-slate-200 shadow-md hover:bg-white'>Grupos</a>
      {
        isLoading && <h2>Cargando...</h2>
      }

      {
        groups.map(group => <TablePositions key={group.id} {...group} />)
      }

    </>
  )
}
