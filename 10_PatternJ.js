// Pattern Ten
//     *
//    **
//   ***
//  ****
// *****

function patternTen(n) {
    let result = "";

    for(let i = 1; i <= n; i++){ // For Row
        for(let space = 1; space <= n - i; space++){ // For Initial Spaces
            result += " ";
        }

        for(let j = 1; j <= i; j++){ // For Column
            result += "*";
        }
        result += '\n';
    }
    console.log(result.trimEnd());
}

patternTen(5);