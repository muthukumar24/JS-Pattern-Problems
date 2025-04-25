//*********
// *******
//  *****
//   ***
//    *

function patternThriteen(n) {
    let result = "";

    for(let i = n; i >= 1; i--){
        for(let space = 1; space <= n - i; space++){
            result += " ";
        }
        for(let j = 1; j <= (i*2) - 1; j++){
            result += "*";
        }
        result += '\n';
    }
    console.log(result.trimEnd());
}

patternThriteen(5);