var judgeCircle = function(moves) {
    const mv = moves.split('');
    let up = 0;
    let left = 0;
mv.forEach((item) => {
 if(item === 'U'){
    up++
  } if (item === 'D'){
    up--
  } if(item === 'L'){
    left++
  } if( item === 'R'){
    left--
  }
});
    return up === 0 && left === 0
    
};
