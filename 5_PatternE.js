// Pattern Five
// 1
// 12
// 123
// 1234
// 12345

function patternFive(n) {
    let result = "";

    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            result += j;
        }
        result += "\n";
    }
    console.log(result.trim());
}

patternFive(5);