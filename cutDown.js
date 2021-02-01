function cutdown(n){
    if(n < 0) return ;
    console.log(n);
    cutdown(n - 1);
}

cutdown(10);