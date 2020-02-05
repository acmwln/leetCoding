//选择排序:找到最小的未排序的元素，然后将它放到排序好的列表末尾。

selectionSort = arr => {
    for(let i = 0; i < arr.length-1; i++) {
      let min = i;
      for(let j = i+1; j < arr.length; j++) {
        if(arr[j] < arr[min]) {
          min = j
        }
      }
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
    console.log('选择排序后的结果:',arr)
    return arr;
  }
  let arr = [0,9,3,2,7,1]
  selectionSort(arr)