export const Team = ({ nombre, bandera, abrev }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img className='w-28 h-16' src={bandera} alt='' />
      <h2>{nombre}</h2>
    </div>
  )
}
