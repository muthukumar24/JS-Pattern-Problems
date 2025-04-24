// static Pattern Two
// 11111
// 22222
// 33333
// 44444
// 55555

function patternTwo(n) {
    let result = "";

    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            result += i;
        }
        result += "\n";
    }

    console.log(result.trim());
}

patternTwo(5);