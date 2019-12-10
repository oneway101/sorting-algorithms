// [4,7,1,0,2]
function split(wholeArray) {
  if (wholeArray.length < 2) { return wholeArray }
  const midIndex = wholeArray.length / 2
  const firstHalf = wholeArray.slice(0,midIndex)
  const secondHalf = wholeArray.slice(midIndex, wholeArray.length)

  // [38,27]
  // firstHalf = 38
  // lastHalf = 27
  console.log(wholeArray, firstHalf, secondHalf)
  return merge(split(firstHalf), split(secondHalf));
}

function merge(firstHalf, secondHalf) {
  // sort elements

  if (firstHalf[0] < secondHalf[0]) {
    console.log('merge:',[...firstHalf, ...secondHalf])
    return [...firstHalf, ...secondHalf]
  } else {
    console.log('merge:',[...secondHalf, ...firstHalf])
    return [...secondHalf, ...firstHalf]
  }

}

split([4,7,1,0,2])

function mergeSort(array){


}
