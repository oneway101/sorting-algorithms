// [3,1,9,0] // checks every elemnents (3 times)
// [1,3,0,9] // checks two tiems
// [1,0,3,9] // checks one time
// [0,1,3,9] //
//

function bubbleSort(array) {
  let length = array.length
  let result = []
  while (result.length < length) {
    array = swap(array)
    result.unshift(array.pop())
    console.log('result:', result)
  }
  return result
}

function swap(array){
  console.log('inputArr', array)
  let i = 0
  while (i < array.length-1) {
    console.log('comparing', array[i], 'and', array[i+1])
    const current = array[i]
    const next = array[i+1]
    if (current > next) {
      array[i] = next
      array[i+1] = current
    }
    i++
  }

  console.log('swapped array:', array)
  return array

}
