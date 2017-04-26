

//插入排序 时间复杂度O(n^2)
function insertionSort(array){
  if(Object.prototype.toString.call(array).slice(8,-1)!='Array') {
  	throw new Error('array is not a Array')
  	return;
  };
  for (var i = 0,l=array.length; i < l; i++) {
  	var insert=array[i];
  	var j=i-1;
  	while (j>=0&&array[j]>insert) {
  		array[j+1]=array[j];
  		j--;
  	}
  	array[j+1]=insert;
  }
  return array;
}
//二分法插入排序
function dichotomyInsertSort(array){
	if(Object.prototype.toString.call(array).slice(8,-1)!='Array'){
      throw new Error('array is not a Array')
  	   return;
	}
	for (var i = 0; i < array.length; i++) {
		var key=array[i],left=0,right=i-1;
		while(left<=right){
            var mid=parseInt((left+right)/2);
            if(key<array[mid]){
            	right++;
            }else{
            	left++;
            }
		}
		for (var j = i-1; j>=left; j--) {
			array[j+1]=array[j];
		}
        array[left]=key;

	}
	return array;
}

//选择排序
function selectionSort(array){
	if(Object.prototype.toString.call(array).slice(8,-1)!='Array'){
	      throw new Error('array is not a Array')
	  	   return;
		}
	for (var i = 0; i < array.length-1; i++) {
			var min=array[i];
			for(var j=i+1;j<array.length;j++){
				if(min>array[j]){
					var temp=array[j];
					array[j]=min;
					min=temp;
				}
			}
			array[i]=min;
		}
		return array;	
}
//快速排序 一
function quickSort(array,left,right){
	if(Object.prototype.toString.call(array).slice(8,-1)!='Array'){
      throw new Error('array is not a Array')
  	   return;
	}
	if(left>=right) return;
	var j=left-1,key=array[right],temp;
	for (var i = left; i <=right; i++) {
	 	if(array[i]<=key&&i!=j){
	 		j++;
            temp=array[j];
            array[j]=array[i];
            array[i]=temp;
	 	}
	 }
	 quickSort(array,left,j-1);
	 quickSort(array,j+1,right);
}
//堆排序
/**
         0
    1        2
  3    4    5   6
 7 8  9 10
*/
var heapSort =(function(){
    function heapAjust(array,len){
      var mid=Math.floor(len/2);
      for (var i = mid; i >=0; i--) {
      	  var l=2*i+1,r=2*i+2,largest=i;
    	  if(l<len&&array[l]>array[largest]) largest=l;
    	  if(r<len&&array[r]>array[largest]) largest=r;
    	  if(largest!=i){
    		swap(array,i,largest)
    	  }
       }    	
    	
    }
    function swap(array,i,j){
            var temp=array[i];
    		array[i]=array[j];
    		array[j]=temp;
    }
   return function heap(array){
      if(Object.prototype.toString.call(array).slice(8,-1)!='Array'){
        console.error('array is not a Array');
  	    return;
	  }
	  var len=array.length;
      for (var i = 0; i < len; i++) {
      	heapAjust(array,len-i);
      	swap(array,0,len-1-i);
      }
   }
})()


module.exports={
	insertionSort:insertionSort,
	dichotomyInsertSort:dichotomyInsertSort,
	selectionSort:selectionSort,
	quickSort:quickSort,
	heapSort:heapSort
}