import { Link } from 'react-router-dom'

function RenderMovie (propiedad) {
  const { movies } = propiedad
  return (
    <ul>
      {movies?.map(peli => (
        <li key={peli.imdbID}>
          <div>
            <h3>{peli.Title}</h3>
            <p>{peli.Year}</p>
            <Link to={`/${peli.imdbID}`}>
              <img
                src={peli.Poster}
                alt={peli.Title}
                id={peli.imdbID}
              />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
function NoRenderMovie() {
  return <p>No hay peliculas</p>
}

export function Movies (propiedad) {
  const {resolve} = propiedad
  const mv = resolve?.length > 0

  return (
    <section>
      {mv ? <RenderMovie movies={resolve} /> : <NoRenderMovie />}
    </section>
  )
}
