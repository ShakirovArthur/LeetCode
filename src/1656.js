var OrderedStream = function(n) {
    this.arr = [];
    this.p = 0;
    this.arr.length = n;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.arr[idKey - 1] = value;
    let result = [];
     while (this.arr[this.p]) {
    result.push(this.arr[this.p]);
    this.p++;
  }

  return result;
};
