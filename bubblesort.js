// [3,1,9,0] // checks every elemnents (3 times)
// [1,3,0,9] // checks two tiems
// [1,0,3,9] // checks one time
// [0,1,3,9] //
//

function bubbleSort(array) {

  // let count = 0
  // while (count < array.length) {
  //   array = swap(array)
  //   count++
  // }

}

function swap(array){
  console.log('inputArr', array)
  let sortedArr = []
  let i = 0
  while (i < array.length-1) {
    //console.log('comparing', array[i], 'and', array[i+1])
    if (array[i] > array[i+1]) {
      sortedArr.push(array[i+1])
      sortedArr.push(array[i])
      i++
    } else {
      sortedArr.push(array[i])
    }
    i++
  }

  console.log('swapped array:', sortedArr)
  return sortedArr

}
