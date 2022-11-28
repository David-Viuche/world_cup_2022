import { Team } from './Team'

export const Match = ({ equipoLocal, equipoVisitante, fecha, estado }) => {
  return (
    <div className='flex flex-col items-center shadow-md p-4'>
      <div className='flex items-center'>
        <h2 className='m-2'>{new Date(fecha).toLocaleString()}</h2>
        <h2>{(estado === 'completed') ? 'Finalizado' : 'Pendiente'}</h2>
      </div>
      <div className='grid grid-cols-2 gap-10'>
        <Team nombre={equipoLocal.nombre} bandera={equipoLocal.bandera} abrev={equipoLocal.abrev} goles={equipoLocal.goles} />
        <Team nombre={equipoVisitante.nombre} bandera={equipoVisitante.bandera} abrev={equipoVisitante.abrev} goles={equipoLocal.goles} />
      </div>
    </div>
  )
}
