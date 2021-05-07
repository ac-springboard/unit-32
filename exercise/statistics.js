'use strict';

class Statistics {

  constructor(str_list) {
    this.list = str_list.split(',').map(item => Number(item));
    this.res  = {
      response: {
        operation: null,
        value    : null
      }
    };
  }

  setRes(name, value) {
    this.res.response.operation = name;
    this.res.response.value     = value;
  }

  mean() {
    let total = 0;
    for (const n of this.list) {
      total += n
    }
    this.setRes('mean', total / this.list.length)
    return this.res;
  }

  // Adapted from:
  // https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-88.php
  median() {
    const mid  = Math.floor(this.list.length / 2)
    const nums = [...this.list].sort((a, b) => a - b)
    this.setRes('median', this.list.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2)
    return this.res
  }

  mode(){
    if (this.list.length === 1 ){
      this.setRes('mode', this.list[0])
      return this.res
    }

    const arr = [...this.list]
    arr.sort()
    let numb, count
    let i = 0
    let occurr = 0
    let modeNumb = arr[0]
    while ( i < arr.length ){
      numb = arr[i]
      count = 0;
      while ( arr[i] === numb ){
        count++
        i++
      }
      console.log( numb, count )
      if (count > occurr ){
        occurr = count
        modeNumb = numb
      }
      count = 0
    }
    // console.log( 'MODE >>', modeNumb, occurr)
    this.setRes('mode', modeNumb )
    return this.res
  }

}

module.exports = {
  Statistics
};
