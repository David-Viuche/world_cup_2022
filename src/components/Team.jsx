export const Team = ({ nombre, bandera, abrev, goles, clas }) => {
  return (
    <div className='flex justify-center items-center flex-col '>
      <a href={`/world_cup_2022/equipo/${abrev}`}><img className={`${(!clas) ? 'h-16' : 'h-10'} w-28 pb-1 xs:w-16 xs:h-10 sm:w-28 sm:h-16`} src={bandera} alt='' /></a>
      <h2>{(goles === undefined) ? nombre : `${nombre}-${goles}`}</h2>
    </div>
  )
}
