function merge(firstHalf, secondHalf) {
  // sort elements
  let tempArr = []

  while (firstHalf.length > 0 && secondHalf.length > 0) {
    if (firstHalf[0] < secondHalf[0]) {
      tempArr.push(firstHalf.shift())
    } else {
      tempArr.push(secondHalf.shift())
    }
  }

  return [...tempArr,...firstHalf,...secondHalf]
}

function mergeSort(array){
  if (array.length < 2) { return array }
  const midIndex = array.length / 2
  const firstHalf = array.slice(0,midIndex)
  const secondHalf = array.slice(midIndex, array.length)
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
