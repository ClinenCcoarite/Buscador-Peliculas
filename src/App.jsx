import './style/index.css'
import { Movies } from './Movies'
import { useSearch } from './customHook/consulting'
import { FormMovies } from './FormMovies'
import { MovieDetail } from './route/MovieDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const { data, resolve } = useSearch()

  return (
    <div className='container'>
      <BrowserRouter>
        <FormMovies data={data} />
        <Routes>
          <Route path='/' element={<Movies resolve={resolve} />} />
          <Route path='/:id' element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
