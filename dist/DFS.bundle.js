(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 20:
/***/ (function(module, exports) {

//二叉树的前序遍历
const postorderTraversal = root => {
  const ans = [];
  dfs(root, ans);
  return ans;
}; //深度优先搜索


function dfs(root, ans) {
  if (!root) return;
  ans.push(root.val);
  dfs(root.left, ans);
  dfs(root.right, ans);
}

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
console.log('DFS深度优先搜索遍历', postorderTraversal(root));

/***/ })

},[[20,0]]]);