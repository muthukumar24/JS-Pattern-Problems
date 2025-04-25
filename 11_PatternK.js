// Pattern Eleven
// *****
// _****
// __***
// ___**
// ____*

function patternEleven(n) {
    let result = "";

    for(let i = 1; i <= n; i++){ // For Row
        for(let space = 1; space <= i - 1; space++){ // For Spaces
            result += " ";
        }

        for(let j = 1; j <= n - (i - 1); j++){ // For Column
            result += "*";
        }
        result += '\n';
    }
    console.log(result.trimEnd());
}

patternEleven(5);