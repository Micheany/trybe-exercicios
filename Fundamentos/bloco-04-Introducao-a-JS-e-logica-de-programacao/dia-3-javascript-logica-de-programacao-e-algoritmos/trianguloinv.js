const n = 7;
let ast = [];

for (let i = 1; i <= n; i++) {
    ast.push(" ");
}

for (let j = n-1 ; j >= 0; j--) {
    ast[j]="*";
    console.log(ast);
}
