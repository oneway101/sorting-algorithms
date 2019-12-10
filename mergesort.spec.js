const oddArr = [4,7,1,0,2]
const oddArrFirstHalf = [4,7]
const oddArrLastHalf = [1,0,2]
const sortedOddArr = [0,1,2,4,7]

// describe('Split Array function', function() {
//   it('is able to split an array into two halves', function() {
//     expect(split([3,9,6,1])).toEqual([[3,9],[6,1]])
//   });
//   it('is able to split an odd length array into two halves', function() {
//     expect(split(oddArr)).toEqual([oddArrFirstHalf,oddArrLastHalf])
//   });
// });

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge(oddArrFirstHalf,oddArrLastHalf)).toEqual(sortedOddArr)
  });
});

describe('MergeSort function', function(){
  it('is able to return a sorted array', function(){
    // test the merging algorithm
    expect(mergeSort(oddArr)).toEqual(sortedOddArr)
  });
  it('is able to return a sorted array with negative integers', function(){
    // test the merging algorithm
    expect(mergeSort([-3, 8, 7, 6, 5, -4, 3, 2, 1 ])).toEqual([-4,-3,1,2,3,5,6,7,8])
  });
});

