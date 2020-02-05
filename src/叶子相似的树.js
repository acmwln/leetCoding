/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//利用深度优先搜索DFS
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const ergodic = (root,result=[]) =>{
        if(!root){
            return;
        }
        if(!root.left&&!root.right){
            result.push(root.val)
        }
        ergodic(root.left,result);
        ergodic(root.right,result);
        return result;
    }
    const result1 = ergodic(root1);
    const result2 = ergodic(root2);
    return result1.join('')===result2.join('')
};


const root1 = {
        val:3,
        left:{
            val:5,
            left:{
                val:6,
                left:null,
                right:null
            },
            right:{
                val:2,
                left:{
                    val:7,
                    left:null,
                    right:null
                },
                right:{
                    val:4,
                    left:null,
                    right:null
                }
            }
        },
        right:{
            val:1,
            left:{
                val:9,
                left:null,
                right:null
            },
            right:{
                val:8,
                left:null,
                right:null
            }
        }
}

const root2 = {
        val:3,
        left:{
            val:5,
            left:{
                val:6,
                left:null,
                right:null
            },
            right:{
                val:2,
                left:{
                    val:7,
                    left:null,
                    right:null
                },
                right:{
                    val:4,
                    left:null,
                    right:null
                }
            }
        },
        right:{
            val:1,
            left:{
                val:9,
                left:null,
                right:null
            },
            right:{
                val:10,
                left:null,
                right:{
                    val:8,
                    left:null,
                    right:null
                }
            }
        }
}

console.log('找到叶子相似的树',leafSimilar(root1,root2))


