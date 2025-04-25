// Pattern Eight
// 1 2 3 4 5 
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function patternEight(n) {
    let result = "";

    for(let i = 1; i<= n; i++){
        for(let j = 1; j <= n - (i - 1); j++){
            result += j + " "; 
        }
        result += '\n';
    }

    console.log(result.trim());
}

patternEight(5);