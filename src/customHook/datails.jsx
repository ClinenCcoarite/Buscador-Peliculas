import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function useDatails() {
  const [date, setDate] = useState()
  const id = useParams()

  const moviesDetails = async e => {
    const resp = e.id
    const data = await fetch(`https://omdbapi.com/?apikey=4287ad07&i=${resp}`)
    const resolve = await data.json()
    setDate(resolve)
  }

  useEffect(() => {
    if (id) {
      moviesDetails(id)
    }
  }, [id])
  return { date }
}
