import { useFetchGroups } from '../hooks/useFetchGroups'
import { CardGroup } from './CardGroup'

export const Groups = () => {
  const { groups, isLoading } = useFetchGroups()

  return (
    <div className='borde px-10 pb-10 w-full flex flex-wrap items-center justify-center lg:max-w-screen-md 2xl:max-w-screen-2xl'>

      {
        isLoading && <h2>Cargando...</h2>
      }

      {
        groups.map(group => <CardGroup key={group.id} {...group} />)
      }

    </div>
  )
}
