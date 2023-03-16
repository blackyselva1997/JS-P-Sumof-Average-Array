let a = [2,4,67,8,2,7,56,23,8,672];
let b = 0;
let c = 0;

for (i=0;i<a.length;i++) {
    if (a[i] % 2 == 0) {
        b += a[i];
        c++;
    }
}
let d = b / c;
console.log(b,":",d);