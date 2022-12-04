var checkTree = function(root) {
    const sum = root.left.val + root.right.val;
    if(root.val == sum ){
        return true
    }else {
        return false
    }
};
