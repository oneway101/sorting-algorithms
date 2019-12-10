// [4,7,1,0,2]
function split(wholeArray) {
  if (wholeArray.length < 2) { return wholeArray }
  const midIndex = wholeArray.length / 2
  const firstHalf = wholeArray.slice(0,midIndex)
  const secondHalf = wholeArray.slice(midIndex, wholeArray.length)
  return merge(split(firstHalf), split(secondHalf));
}

function merge(firstHalf, secondHalf) {
  // sort elements
  let tempArr = []
  console.log('merge', firstHalf, secondHalf)

  while (firstHalf.length > 0 && secondHalf.length > 0) {
    if (firstHalf[0] < secondHalf[0]) {
      tempArr.push(firstHalf.shift())
    } else {
      tempArr.push(secondHalf.shift())
    }
  }
  console.log('returning from merge:', [...tempArr,...firstHalf,...secondHalf])

  return [...tempArr,...firstHalf,...secondHalf]
}

split([4,7,1,0,2])

function mergeSort(array){
  return split(array)
}
