let g = false;

setTimeout(()=>{
console.log(g);
},10);

setTimeout(()=>{g = true;
    console.log(g);
},0);

console.log(g+"W??");