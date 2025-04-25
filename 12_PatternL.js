//    *
//   ***
//  *****
// *******
//*********

function patternTwelve(n) {
    let result = "";

    for(let i = 1; i <= n; i++){ // For Row
        for(let space = 1; space <= n - i; space++){ // For Spaces
            result += " ";
        }
        for(let j = 1; j <= (i*2) - 1; j++){ // For Column
            result += "*";
        }
        result += "\n";
    }
    console.log(result.trimEnd());
}

patternTwelve(5);