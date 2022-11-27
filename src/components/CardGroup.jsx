import { Teams } from './Teams'

export const CardGroup = ({ code, equipos }) => {
  return (
    <div className='m-5 p-5 border shadow-md max-w-xs'>
      <a href={`/grupo/${code}`}>
        <h3 className='border-b-2 mb-5 text-center font-bold'>Grupo {code}</h3>
      </a>

      <Teams teams={equipos} />
    </div>
  )
}
