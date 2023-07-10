var rangeSumBST = function(root, low, high) {
    let sum = 0;

    let iterate = (node=root) => {
        if(!node){
            return;
        }
        iterate(node.left)

        if(node.val >= low && node.val <= high) {
            sum += node.val;
        }

        iterate(node.right)
    }

    iterate();
    return sum;
};
