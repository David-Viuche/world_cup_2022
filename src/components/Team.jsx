export const Team = ({ nombre, bandera, abrev, clas }) => {
  return (
    <div className='flex justify-center items-center flex-col '>
      <a href={`/world_cup_2022/equipo/${abrev}`}>
        <img className={`${(!clas) ? 'h-16 w-28' : 'h-8 w-14'}  xs:w-16 xs:h-10 sm:w-28 sm:h-16 shadow-md`} src={bandera} alt={`bandera - ${nombre}`} />
      </a>
      <h2 className='pt-2'>{nombre}</h2>
    </div>
  )
}
