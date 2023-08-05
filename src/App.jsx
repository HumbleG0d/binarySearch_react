import './App.css'
import '../src/css/search.css'
import '../src/css/square.css'
import { Search } from './components/Search.jsx'
import { Square } from './components/Square.jsx'
import { numbers } from './js/randomNumber.js'
import { binary } from './js/binarySearch.js'
import { useState , useEffect , useMemo} from 'react'


function App() {
  const array_numbers =  useMemo(() => numbers(), []); //! Se redeneriza dos veces para ello se debe usar useMemo o useEffect. Pero aun no llegamos a eso
  const [ nFound , setNfound ] = useState(-1)
  const [ searchResult , setSearchResult ] = useState([])

  useEffect(() => {
    setSearchResult(nFound !== -1 ? [array_numbers[nFound]] : []);
  }, [nFound, array_numbers]);

  const changeValue = (n) => {
    const newNfound = binary(array_numbers , n)
    setNfound(newNfound)
  }

  return (
    <>
      <section className='seeker'>
        <Search
          changeValue={changeValue}
        />
      </section>
      <section className='view'>
        {searchResult.length > 0
          ? searchResult.map(n => (
            <Square key={n} number={n}/>
          ))
          : array_numbers.map((n , i) => (
            <Square key={i} number={n}/>
          ))
        }
        {array_numbers.map(n => {
          console.log(n)
        })}
      </section>
    </>  
  )
}

export default App
