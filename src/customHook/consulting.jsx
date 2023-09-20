import { useState } from 'react'

export const useSearch = () => {
  const [resolve, setResolve] = useState()

  const data = async e => {
    e.preventDefault()
    const entrada = new FormData(e.target)
    const busqueda = entrada.get('search')
    const response = await fetch(
      `https://omdbapi.com/?apikey=4287ad07&s=${busqueda}`
    )
    const data = await response.json()
    setResolve(data.Search)
  }

  return { data, resolve }
}
