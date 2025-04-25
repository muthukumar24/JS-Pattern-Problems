//    *
//   ***
//  *****
// *******
//*********
// *******
//  *****
//   ***
//    *

function patternFourteen(n) {
    let result = "";

    for(let i = 1; i <= (n * 2) - 1; i++){ // For Row
        // Row Change
        let rowChange = i > n ? (n * 2) - i : i;
        for(let space = 1; space <= n - rowChange; space++){ // For Space
            result += " ";
        }
        for(let j = 1; j <= (rowChange * 2) - 1; j++){ // For Column
            result += "*";
        }
        result += "\n";
    }
    console.log(result.trimEnd());
}

patternFourteen(5);