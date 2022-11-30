import { Team } from './Team'

export const TablePositions = ({ equipos }) => {
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center mt-2'>

      <table className='text-center m-5 border-spacing-2 border-separate lg:border-spacing-5'>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Equipo</th>
            <th>PJ</th>
            <th>Vic</th>
            <th>Der</th>
            <th>Emp</th>
            <th>Ant</th>
            <th>Ctr</th>
            <th>Dif</th>
          </tr>
        </thead>
        <tbody>
          {
                equipos.map(({ id, posicion, abrev, bandera, puntos, victorias, derrotas, empates, golesAnotados, golesEnContra, golesDiferencia }) => {
                  return (
                    <tr key={id} className='border-b-2 border-black'>
                      <td>{posicion}</td>
                      <td>
                        <Team nombre={abrev} bandera={bandera} abrev={abrev} clas />
                      </td>
                      <td>{puntos}</td>
                      <td>{victorias}</td>
                      <td>{derrotas}</td>
                      <td>{empates}</td>
                      <td>{golesAnotados}</td>
                      <td>{golesEnContra}</td>
                      <td>{golesDiferencia}</td>
                    </tr>
                  )
                })
            }

        </tbody>
      </table>
    </div>
  )
}
