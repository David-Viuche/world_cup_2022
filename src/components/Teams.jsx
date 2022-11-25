import { Team } from './Team'

export const Teams = ({ teams }) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {
        teams.map(team => (
          <Team key={team.id} {...team} />
        ))
    }
    </div>
  )
}
