
export const MatchStatus = ({ status }) => {
  if (status === 'completed') {
    return <h2 className='bg-lime-600 p-1 rounded-lg text-white font-medium'>Finalizado</h2>
  }

  if (status === 'scheduled') {
    return <h2 className='bg-red-500 p-1 rounded-lg text-white font-medium'>Pendiente</h2>
  }

  return <h2 className='bg-orange-600 p-1 rounded-lg text-white font-medium'>En curso</h2>
}
