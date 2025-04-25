// * * * * * 
//  * * * * 
//   * * *
//    * *
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

function patternFifteen(n) {
    let result = "";

    for(let i = 1; i <= (n * 2) - 1; i++){ // For Row
        // For row change
        let rowChange = i > n ? (n * 2) - i : i;
        for(let space = 1; space <= rowChange - 1; space++){ // For Spaces
            result += " ";
        }
        for(let j = 1; j <= (n - rowChange) + 1; j++){
            result += "* "
        }
        result += '\n';
    }
    console.log(result.trimEnd());
}

patternFifteen(5);