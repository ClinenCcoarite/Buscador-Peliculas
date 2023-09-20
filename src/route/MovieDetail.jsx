import { useDatails } from '../customHook/datails'

export function MovieDetail () {
  const { date } = useDatails()

  return (
    <div className='detail'>
      <h2>{date?.Title}</h2>
      <h3>Actors: {date?.Actors}</h3>
      <p><b>Fecha de realizacion:</b> {date?.Released}</p>
      <p><b>Director:</b> {date?.Director}</p>
      <p><b>Duracion:</b> {date?.Runtime}</p>
      <div className='img-detail'>
        <img src={date?.Poster} alt={date?.Title} />
      </div>
    </div>
  )
}
