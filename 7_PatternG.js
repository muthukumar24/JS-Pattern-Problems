// Pattern Seven
// 5 5 5 5 5 
// 4 4 4 4 
// 3 3 3 
// 2 2 
// 1

function patternSeven(n) {
    let result = "";

    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n - (i - 1); j++){
            result += n - (i - 1) + " ";
        }
        result += "\n";
    }
    console.log(result.trim());
}

patternSeven(5);