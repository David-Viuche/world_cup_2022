import { MatchStatus } from './MatchStatus'
import { Team } from './Team'

export const Match = ({ equipoLocal, equipoVisitante, fecha, estado, fase }) => {
  return (
    <div className='flex flex-col items-center shadow-md p-4'>
      <h1 className='m-3 font-semibold'>{fase}</h1>
      <div className='flex'>
        <Team nombre={equipoLocal.nombre} bandera={equipoLocal.bandera} abrev={equipoLocal.abrev} />
        <div className='m-2  flex items-center sm:m-5'>
          <h1 className='text-lg font-bold'>{(estado !== 'scheduled') ? `${equipoLocal.goles} - ${equipoVisitante.goles}` : 'vs'}</h1>
        </div>
        <Team nombre={equipoVisitante.nombre} bandera={equipoVisitante.bandera} abrev={equipoVisitante.abrev} />
      </div>
      <div className='flex items-center mt-2'>
        <h2 className='m-2'>{new Date(fecha).toLocaleString()}</h2>
        <MatchStatus status={estado} />
      </div>
    </div>
  )
}
