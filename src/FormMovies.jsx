import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormMovies(propiedad) {
  const { data } = propiedad
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = e => {
    e.preventDefault()
    setQuery(e.target.value)
  }
  useEffect(() => {
    if (query === '') {
      setError('busca una pelicula')
      return
    }
    if (query.length <= 2) {
      setError('debe contener mas de 3 caracteres')
      return
    }
    setError(null)
  }, [query])

  useEffect(() => {
    navigate('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <header>
      <h1>Buscador de peliculas</h1>
      <form onSubmit={data}>
        <input
          onChange={handleChange}
          name='search'
          type='text'
          autoComplete='off'
        />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p className='parafo'>{error}</p>}
    </header>
  )
}
