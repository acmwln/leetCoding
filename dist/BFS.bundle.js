(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 15:
/***/ (function(module, exports) {

// //给定一个二叉树,返回其节点值自底向上的层次遍历.（即从叶子节点所在层到根节点所在的层,逐层从左到右遍历）
// //eg:给定二叉树[3,9,20,null,null,15,7]
// //定义一个二叉树
// function TreeNode(val){
//     this.val = val;
//     this.left = this.right = null;
// }
// // TreeNode(root)
// var levelOrderBottom = function(root){
//     if(!root) return [];
//     var ans = [],tmp=[root];
//     while(tmp.length){
//         var res = [],_tmp=[];
//         tmp.forEach((item)=>{
//             res.push(item);
//             if(item.left){
//                 _tmp.push(item.left);
//             }
//             if(item.right){
//                 _tmp.push(item.right);
//             }
//         })
//         ans.push(res);
//         tmp = _tmp;
//     }
//     console.log('6789999',ans.reverse())
//     return ans.reverse();
// }
// let root = [3,9,20,null,null,15,7]
// levelOrderBottom(root)
// 广度优先搜索算法
var levelOrder = function (root) {
  var result = [];
  var queue = [];

  if (root !== null) {
    queue.push(root);
  }

  while (queue.length !== 0) {
    var level = [];
    var len = queue.length;

    for (var i = 0; i < len; i++) {
      var currentNode = queue.shift();
      currentNode && currentNode.val && level.push(currentNode.val);
      if (currentNode && currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode && currentNode.right !== null) queue.push(currentNode.right);
    }

    result.push(level);
  }

  return result;
};

const root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 6,
        left: null,
        right: null
      },
      right: {
        val: 7,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 1,
      left: {
        val: 5,
        left: null,
        right: null
      },
      right: {
        val: 10,
        left: null,
        right: {
          val: 7,
          left: null,
          right: null
        }
      }
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
};
console.log('BFS广度优先搜索遍历', levelOrder(root));

/***/ })

},[[15,0]]]);