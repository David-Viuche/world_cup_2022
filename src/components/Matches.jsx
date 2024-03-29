import { getGroupByAbrev } from '../helpers/getGroup'
import { useFetchMatches } from '../hooks/useFetchMatches'
import { Match } from './Match'
import { MatchLoader } from './MatchLoader'

export const Matches = ({ abrev, btns, fase }) => {
  const { matches, isLoading } = useFetchMatches(abrev)
  return (
    <div className={`${(btns) && 'p-10 '} w-full flex flex-col flex-wrap items-center justify-center lg:max-w-screen-md 2xl:max-w-screen-2xl gap-4 p-10`}>

      {
        btns &&
          <div className='flex w-full justify-around'>
            <a href='/' className='p-4 rounded bg-slate-200 shadow-md hover:bg-white'>Inicio</a>
            <a href={`/grupo/${getGroupByAbrev(abrev)}`} className='p-4 rounded bg-slate-200 shadow-md hover:bg-white'>Clasificación</a>
          </div>
      }

      {
        isLoading && <MatchLoader />
      }

      {
        !isLoading && matches.length === 0 && <h2>No hay partidos programados para hoy</h2>
      }

      {
        ((fase)
          ? matches.filter(match => match.fase === fase)
          : matches)
          .map(match => (<Match key={match.id} {...match} />))
      }

    </div>
  )
}
