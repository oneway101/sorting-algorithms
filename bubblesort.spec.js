
describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Single Item', function(){
  it('handles a single item in an array', function(){
    expect( bubbleSort([5])).toEqual([5])
  })
})

describe('Multiple Items', function(){
  it('handles multiple items in an array', function(){
    expect( bubbleSort([3,7,2,1,9,0])).toEqual([0,1,2,3,7,9])
  })
})
