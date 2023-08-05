export function binary(array, n){
  let min = 0
  let max = array.length - 1

  while( min <= max){
    const midle = Math.floor((min + max)/2)
    if(array[midle] < n){
      min = midle + 1
    }
    else if(array[midle] > n){
      max = midle - 1
    }
    else{
      return midle
    }
  }
  return -1
}