// 题目分析:
// 查找我们最熟悉的就是二分查找了，不过二分查找查找的数在数组中只有一个，我们这里却有很多个，是一段。所以我们要确定找的数的开始位置和结束位置

// 主要就是判断的条件，当a[mid]的值等于k时，指针该如何走。

//时间复杂度O(logn)

function GetNumberOfK(data,length,k) {
  let number = 0;
  if(data!==null&&length>0){
      let first = getFirstK(data,length,k,0,length-1)
      let last = getLastK(data,length,k,0,length-1)
      if(first>-1&&last>-1){
          number = last-first+1
      }
  }
  return number
}
function getFirstK(data,length,k,start,end) {
    if(start>end){   //如果数组中不包含k，返回-1
        return -1
    }
    let middleIndex = (start+end)/2
    let middleData = data[middleIndex]
    if(middleData === k){
        if((middleIndex>0&&data[middleIndex-1]!=k)||middleIndex===0){
            return middleIndex
        }else{
            return middleIndex -1
        }
    }else if(middleData > k){
        end = middleIndex-1
    }else{
        start = middleIndex + 1
    }
    return getFirstK(data,length,k,start,end)
}

function getLastK(data,length,k,start,end){
    if(start>end){
        return -1
    }
    let middleIndex = (start+end)/2
    let middleData = data[middleIndex]
    if(middleData === k){
        if((middleIndex<length-1 && data[middleIndex+1]!=k)||middleIndex===length-1){
            return middleIndex
        }else{
            start = middleIndex+1
        }
    }else if(middleData<k){
        start = middleIndex+1
    }else{
        end = middleIndex -1
    }
    return getLastK(data,length,k,start,end)
}
