
function partition(array , min , max){
  const pivote = array[max]
  let i = min - 1
  
  for(let j = min ; j <= max ; j++){
    if(array[j] < pivote){
      i++
      [array[i] , array[j]] = [array[j] , array[i]]
    }
  }
  [array[i + 1] , array[max]] = [array[max] , array[i + 1]]
  return i +1
}

export function quickSort(array , min , max){
  if(min < max){
    const index_pivot = partition(array , min , max)
    quickSort(array , min , index_pivot - 1)
    quickSort(array , index_pivot + 1 , max)
  }
}

