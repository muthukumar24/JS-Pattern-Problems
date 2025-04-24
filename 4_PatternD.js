// Pattern Four
// 1
// 22
// 333
// 4444
// 55555

function patternFour(n) {
    let result = "";
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            result += i;
        }
        result += "\n";
    }

    console.log(result.trim());
}

patternFour(5);