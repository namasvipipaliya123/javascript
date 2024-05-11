let n = 10 , p = 20;

console.log("========== Before swaping ==========");
console.log("Answer A :",n);
console.log("Answer B:",p);

n=n^p;
p=n^p;
n=n^p;

console.log("========== After swaping ==========");
console.log("Answer A :",n);
console.log("Answer B:",p); 