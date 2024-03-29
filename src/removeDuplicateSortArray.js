// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

//  

// 示例 1:

// 给定数组 nums = [1,1,2], 

// 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

// 你不需要考虑数组中超出新长度后面的元素。
// 示例 2:

// 给定 nums = [0,0,1,1,1,2,2,3,3,4],

// 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

// 你不需要考虑数组中超出新长度后面的元素。

// 思路：
// 1.返回的长度 = 数组的长度-重复元素的长度
// 2.元素被修改后的数组 = 原数组经历下面操作：
    // a.设置数组重复元素的个数为 count = 0
    // b.从数组第二个元素开始遍历 i = 1;i<nums.length;i++;
    // c.当遇到第一个重复的元素时 count++
    // d.当遍历到与上一个元素不重复即不相同时，此时当前元素需要向前移动n个重复元素的位置即替换，即相当于替换最近一次重复元素第一次出现的索引位置上的元素
    // 最近一次重复元素第一次出现的位置上的元素 = 当前元素 => nums[i-count] = nums[i] && 符合循环条件则继续遍历回到第<b>步 否则进入下一步
    // e.返回长度 n - count


var removeDuplicate = function(nums){
    var count = 0;   //用来记录重复元素的长度
    var n = nums.length;
    for(var i = 1; i < n;i++){
        if(nums[i] !== nums[i-1]){
            nums[i-count] = nums[i]   
        }else{
            count++
        }
    }
    return n-count
}
