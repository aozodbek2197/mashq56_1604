// 1-mashq
let a=5, b=10;
[a,b] = [b,a];
console.log(a,b);
// 2-mashq
let arr = [5,1,3];
arr.sort((a,b)=>a-b);
console.log(arr.slice(0,2));
// 3-mashq
let arr = [1,[2,3]];
console.log(arr.flat());
// 4-mashq
let s = "I love JS";
console.log(s.split(" ").length);
// 5-mashq
let s = "hello world";
let res = s.split(" ").map(w => w[0].toUpperCase()+w.slice(1));
console.log(res.join(" "));
