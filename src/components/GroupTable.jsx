import { useFetchGroups } from '../hooks/useFetchGroups'
import { TableLoader } from './TableLoader'
import { TablePositions } from './TablePositions'

export const GroupTable = ({ groupCode }) => {
  const { groups, isLoading } = useFetchGroups(groupCode)

  return (
    <>
      <a href='/' className='p-4 m-4 rounded bg-slate-200 shadow-md hover:bg-white'>Inicio</a>
      {
        isLoading && <TableLoader />
      }

      {
        groups.map(group => <TablePositions key={group.id} {...group} />)
      }

    </>
  )
}
