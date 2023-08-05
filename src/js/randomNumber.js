import { quickSort} from './quickSort.js'

export const numbers = () => {
  const array = []
  let i = 0 
  while(i<100){
    const n = Math.floor(Math.random()*(1000))
    array.push(n)
    i++
  }
  quickSort(array , 0 , array.length - 1)
  return array
}
