var common=require('./common.js');

var sort=require('./sort.js')
var l=100000;
var a=common.randomIntegerArray(l),b;
var a1=common.randomIntegerArray(l),b1;
var a2=common.randomIntegerArray(l),b2;
var a3=common.randomIntegerArray(l),b3;
var a4=common.randomIntegerArray(l),b4;
/**************
*插入排序时间测试
***************/
console.time('insert');

 // console.log(a);
 b=sort.insertionSort(a);
 // console.log(b);
console.timeEnd('insert');

/**************
*二分法插入排序时间测试
***************/
console.time('twoinsert');

// console.log(a1);
 b1=sort.dichotomyInsertSort(a);
// console.log(b1);
console.timeEnd('twoinsert');

/**************
*选择排序时间测试
***************/
console.time('selectionSort');

// console.log(a2);
 b2=sort.selectionSort(a2);
// console.log(b2);
console.timeEnd('selectionSort');

/**************
*快速排序时间测试一
***************/
console.time('quickSort1');
// console.log(a3);
 sort.quickSort(a3,0,a3.length-1);
 // console.log(a3);
console.timeEnd('quickSort1');

/**************
*堆排序时间测试一
***************/
console.time('heapSort');
// console.log(a4);
  debugger;
  sort.heapSort(a4);
// console.log(a4);
console.timeEnd('heapSort');