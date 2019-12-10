// [4,7,1,0,2]
function split(wholeArray) {
  if (wholeArray.length < 2) { return wholeArray }
  const midIndex = wholeArray.length / 2
  const firstHalf = wholeArray.slice(0,midIndex)
  const secondHalf = wholeArray.slice(midIndex, wholeArray.length)

  // [38,27]
  // firstHalf = 38
  // lastHalf = 27
  // console.log('wholearray', wholeArray, 'firsthalf', firstHalf, 'secondhalf', secondHalf)
  return merge(split(firstHalf), split(secondHalf));
}

function merge(firstHalf, secondHalf) {
  // sort elements
  let tempArr = []
  console.log('first half length outside while', firstHalf.length, 'secondhalf length outside while', secondHalf.length)

  while (firstHalf.length > 0 || secondHalf.length > 0) {
    // if (firstHalf.length === 1 && secondHalf.length === 1) { return tempArr }
    if (firstHalf[0] < secondHalf[0]) {
      // console.log('merge:',[...firstHalf, ...secondHalf])
      tempArr.push(firstHalf.shift())
      // return [...firstHalf, ...secondHalf]
    } else {
      // console.log('merge:',[...secondHalf, ...firstHalf])
      tempArr.push(secondHalf.shift())

      // return [...secondHalf, ...firstHalf]
    }
  }
  console.log('first from merge', firstHalf, 'second from merge', secondHalf, 'temparr', tempArr, 'firsthalf length after while', firstHalf.length, 'secondhalf length after while', secondHalf.length)
}

split([4,7,1,0,2])

function mergeSort(array){


}
