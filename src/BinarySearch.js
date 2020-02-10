/** 
 * Given a sorted array arr[] of n elements, 
 * write a function to search a given element x in arr[].
 * A simple approach is to do linear search.The time complexity of above algorithm is O(n). 
 * Another approach to perform the same task is using Binary Search.
 * Binary Search: Search a sorted array by repeatedly dividing the search interval in half. 
 * Begin with an interval covering the whole array. 
 * If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. 
 * Repeatedly check until the value is found or the interval is empty.
*/


Log = (...args) => console.log('LOG => ', ...args);

const _binarySearch = (arr, left, rigth, itemToSearch) => {
   while (left <= rigth ) {
        let mid = parseInt(left + (rigth-left) / 2);
        if (arr[mid] == itemToSearch){
            return arr[mid];
        } else if(arr[mid] < itemToSearch){
            left = mid + 1;
        } else {
            rigth = mid - 1;
        }
   };
   return -1;
};

const BinarySearch = (arr, itemToSearch) => {
    const left = 0;
    const rigth = arr.length-1;
    return _binarySearch(arr, left, rigth, itemToSearch)
};


module.exports = BinarySearch;
